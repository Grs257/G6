import { isArray, isNumber, uniqueId } from '@antv/util';
import { GraphData } from '../../types';
import { GraphCore, GraphDataChanges } from '../../types/data';

/**
 * Validate and format the graph data.
 * @param data input user data.
 * @param options validate options.
 * @param graphCore the graph core stores the previous data.
 * @returns formatted data.
 */
export const TransformV4Data = (data: GraphDataChanges, options = {}, graphCore?: GraphCore): GraphDataChanges => {
  const { dataAdded, dataUpdated, dataRemoved } = data;
  return {
    dataAdded: handler(dataAdded, options, graphCore),
    dataUpdated: handler(dataUpdated, options, graphCore),
    dataRemoved: handler(dataRemoved, options, graphCore),
  };
};

const handler = (data: GraphData, options = {}, graphCore?: GraphCore): GraphData => {
  const { nodes = [], edges = [], combos = [] } = data;
  const formattedNodes = nodes.map((node: any) => {
    const prevNode = graphCore?.getNode(node.id);
    const mergedNode = {
      ...prevNode,
      ...node,
    };
    const { id, type, style, size, color, label, labelCfg = {}, icon, linkPoints, data = {}, ...others } = mergedNode;
    const anchorShapes = [];
    if (linkPoints) {
      const { top, bottom, left, right, ...otherAnchorShapeStyles } = linkPoints;
      Object.keys({ top, bottom, left, right }).forEach((key) => {
        if (!linkPoints[key]) return;
        anchorShapes.push({ position: key, ...otherAnchorShapeStyles });
      });
    }
    const { style: labelStyle = {}, ...otherLabelStyle } = labelCfg;
    const { background } = labelStyle;
    const newNode = {
      id,
      data: {
        ...others,
        ...data,
        labelShape: {
          ...labelStyle,
          ...otherLabelStyle,
          ...data.labelShape,
        },
      },
    };
    if (type) {
      newNode.data.type = type.includes('-node') ? type : `${type}-node`;
    }
    if (style) {
      newNode.data.keyShape = style;
    }
    const nodeSize = formatSize(size);
    if (nodeSize) {
      newNode.data.keyShape = {
        ...newNode.data.keyShape,
        r: nodeSize?.[0],
        width: nodeSize?.[0],
        height: nodeSize?.[1],
      };
    }
    if (color) {
      newNode.data.keyShape.fill = color;
    }
    if (label) {
      newNode.data.labelShape.text = label;
    }
    if (icon?.show) {
      newNode.data.icon = icon;
    }
    if (anchorShapes.length) {
      newNode.data.anchorShapes = anchorShapes;
    }
    if (background) {
      newNode.data.labelBackgroundShape = background;
    }
    return newNode;
  });

  const formattedEdges = edges.map((edge: any) => {
    const prevEdge = graphCore?.getEdge(edge.id);
    const mergedEdge = {
      ...prevEdge,
      ...edge,
    };
    const {
      id = uniqueId(),
      type,
      source,
      target,
      style,
      size,
      color,
      label,
      labelCfg = {},
      icon,
      linkPoints,
      data = {},
      ...others
    } = mergedEdge;
    const { style: labelStyle = {}, ...otherLabelStyle } = labelCfg;
    const { background } = labelStyle;
    const newEdge = {
      id,
      source,
      target,
      data: {
        ...others,
        ...data,
        labelShape: {
          ...labelStyle,
          ...otherLabelStyle,
          ...data.labelShape,
        },
      },
    };
    if (type) {
      newEdge.data.type = type.includes('-edge') ? type : `${type}-edge`;
    }
    if (style) {
      newEdge.data.keyShape = style;
    }
    if (size) {
      newEdge.data.keyShape = newEdge.data.keyShape || {};
      newEdge.data.keyShape.lineWidth = size;
    }
    if (color) {
      newEdge.data.keyShape = newEdge.data.keyShape || {};
      newEdge.data.keyShape.stroke = color;
    }
    if (label) {
      newEdge.data.labelShape.text = label;
    }
    if (background) {
      newEdge.data.labelBackgroundShape = background;
    }
    return newEdge;
  });

  const formattedCombos = combos.map((combo: any) => {
    const prevCombo = graphCore?.getNode(combo.id);
    const mergedCombo = {
      ...prevCombo,
      ...combo,
    };
    const { id, type, style, size, color, label, labelCfg = {}, icon, linkPoints, data = {}, ...others } = mergedCombo;
    const { style: labelStyle = {}, ...otherLabelStyle } = labelCfg;
    const { background } = labelStyle;
    const newCombo = {
      id,
      data: {
        ...others,
        ...data,
        labelShape: {
          ...labelStyle,
          ...otherLabelStyle,
          ...data.labelShape,
        },
      },
    };

    if (type) {
      newCombo.data.type = type.includes('-combo') ? type : `${type}-combo`;
    }
    if (style) {
      newCombo.data.keyShape = style;
    }
    const comboSize = formatSize(size);
    if (comboSize) {
      newCombo.data.keyShape = {
        ...newCombo.data.keyShape,
        r: comboSize?.[0],
        width: comboSize?.[0],
        height: comboSize?.[1],
      };
    }
    if (color) {
      newCombo.data.keyShape = newCombo.data.keyShape || {};
      newCombo.data.keyShape.fill = color;
    }
    if (label) {
      newCombo.data.labelShape.text = label;
    }
    if (background) {
      newCombo.data.labelBackgroundShape = background;
    }
    return newCombo;
  });

  return {
    nodes: formattedNodes || [],
    edges: formattedEdges || [],
    combos: formattedCombos || [],
  };
};

const formatSize = (size) => {
  if (!size) return;
  if (isNumber(size)) return [size, size];
  if (isArray(size)) return size.length > 2 ? [size[0], size[1]] : size;
  return;
};
