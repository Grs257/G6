import { Extensions, Graph, register } from '../../../src/index';
import { TestCaseContext } from '../interface';

register('edge', 'polyline-edge', Extensions.PolylineEdge);
register('widget', 'edgeBundling', Extensions.EdgeBundling);

export default (context: TestCaseContext, options = {}) => {
  const data = {
    nodes: [
      {
        id: '0',
        data: {
          label: '0',
        },
      },
      {
        id: '1',
        data: {
          label: '1',
        },
      },
      {
        id: '2',
        data: {
          label: '2',
        },
      },
      {
        id: '3',
        data: {
          label: '3',
        },
      },
      {
        id: '4',
        data: {
          label: '4',
        },
      },
      {
        id: '5',
        data: {
          label: '5',
        },
      },
      {
        id: '6',
        data: {
          label: '6',
        },
      },
      {
        id: '7',
        data: {
          label: '7',
        },
      },
      {
        id: '8',
        data: {
          label: '8',
        },
      },
      {
        id: '9',
        data: {
          label: '9',
        },
      },
      {
        id: '10',
        data: {
          label: '10',
        },
      },
      {
        id: '11',
        data: {
          label: '11',
        },
      },
      {
        id: '12',
        data: {
          label: '12',
        },
      },
      {
        id: '13',
        data: {
          label: '13',
        },
      },
      {
        id: '14',
        data: {
          label: '14',
        },
      },
      {
        id: '15',
        data: {
          label: '15',
        },
      },
      {
        id: '16',
        data: {
          label: '16',
        },
      },
      {
        id: '17',
        data: {
          label: '17',
        },
      },
      {
        id: '18',
        data: {
          label: '18',
        },
      },
      {
        id: '19',
        data: {
          label: '19',
        },
      },
      {
        id: '20',
        data: {
          label: '20',
        },
      },
      {
        id: '21',
        data: {
          label: '21',
        },
      },
      {
        id: '22',
        data: {
          label: '22',
        },
      },
      {
        id: '23',
        data: {
          label: '23',
        },
      },
      {
        id: '24',
        data: {
          label: '24',
        },
      },
      {
        id: '25',
        data: {
          label: '25',
        },
      },
      {
        id: '26',
        data: {
          label: '26',
        },
      },
      {
        id: '27',
        data: {
          label: '27',
        },
      },
      {
        id: '28',
        data: {
          label: '28',
        },
      },
      {
        id: '29',
        data: {
          label: '29',
        },
      },
      {
        id: '30',
        data: {
          label: '30',
        },
      },
      {
        id: '31',
        data: {
          label: '31',
        },
      },
      {
        id: '32',
        data: {
          label: '32',
        },
      },
      {
        id: '33',
        data: {
          label: '33',
        },
      },
    ],
    edges: [
      {
        source: '0',
        target: '1',
      },
      {
        source: '0',
        target: '2',
      },
      {
        source: '0',
        target: '3',
      },
      {
        source: '0',
        target: '4',
      },
      {
        source: '0',
        target: '5',
      },
      {
        source: '0',
        target: '7',
      },
      {
        source: '0',
        target: '8',
      },
      {
        source: '0',
        target: '9',
      },
      {
        source: '0',
        target: '10',
      },
      {
        source: '0',
        target: '11',
      },
      {
        source: '0',
        target: '13',
      },
      {
        source: '0',
        target: '14',
      },
      {
        source: '0',
        target: '15',
      },
      {
        source: '0',
        target: '16',
      },
      {
        source: '2',
        target: '3',
      },
      {
        source: '4',
        target: '5',
      },
      {
        source: '4',
        target: '6',
      },
      {
        source: '5',
        target: '6',
      },
      {
        source: '7',
        target: '13',
      },
      {
        source: '8',
        target: '14',
      },
      {
        source: '9',
        target: '10',
      },
      {
        source: '10',
        target: '22',
      },
      {
        source: '10',
        target: '14',
      },
      {
        source: '10',
        target: '12',
      },
      {
        source: '10',
        target: '24',
      },
      {
        source: '10',
        target: '21',
      },
      {
        source: '10',
        target: '20',
      },
      {
        source: '11',
        target: '24',
      },
      {
        source: '11',
        target: '22',
      },
      {
        source: '11',
        target: '14',
      },
      {
        source: '12',
        target: '13',
      },
      {
        source: '16',
        target: '17',
      },
      {
        source: '16',
        target: '18',
      },
      {
        source: '16',
        target: '21',
      },
      {
        source: '16',
        target: '22',
      },
      {
        source: '17',
        target: '18',
      },
      {
        source: '17',
        target: '20',
      },
      {
        source: '18',
        target: '19',
      },
      {
        source: '19',
        target: '20',
      },
      {
        source: '19',
        target: '33',
      },
      {
        source: '19',
        target: '22',
      },
      {
        source: '19',
        target: '23',
      },
      {
        source: '20',
        target: '21',
      },
      {
        source: '21',
        target: '22',
      },
      {
        source: '22',
        target: '24',
      },
      {
        source: '22',
        target: '25',
      },
      {
        source: '22',
        target: '26',
      },
      {
        source: '22',
        target: '23',
      },
      {
        source: '22',
        target: '28',
      },
      {
        source: '22',
        target: '30',
      },
      {
        source: '22',
        target: '31',
      },
      {
        source: '22',
        target: '32',
      },
      {
        source: '22',
        target: '33',
      },
      {
        source: '23',
        target: '28',
      },
      {
        source: '23',
        target: '27',
      },
      {
        source: '23',
        target: '29',
      },
      {
        source: '23',
        target: '30',
      },
      {
        source: '23',
        target: '31',
      },
      {
        source: '23',
        target: '33',
      },
      {
        source: '32',
        target: '33',
      },
    ],
  };

  const container = context.container!;
  const width = container.scrollWidth;
  const height = container.scrollHeight || 500;

  const graph = new Graph({
    ...context,
    data,
    width,
    height,
    layout: {
      type: 'circular',
      center: [width / 2, height / 2],
      radius: height / 2.5,
      ordering: null,
    },
    node: {
      type: 'circle-node',
      keyShape: {
        r: 14,
        fill: '#4089FF',
      },
      labelShape: {
        position: 'center',
        fontSize: 14,
        text: {
          fields: ['label'],
          formatter: (model) => model.data.label,
        },
        fill: '#fff',
      },
    },
    plugins: [
      {
        type: 'edgeBundling',
        key: 'edgeBundling',
        bundleThreshold: 0.1,
      },
    ],
    modes: {
      default: ['drag-canvas', 'zoom-canvas'],
    },
  });

  const { plugin: edgeBundling } = graph.pluginController.pluginMap.get('edgeBundling');

  setTimeout(() => {
    const nodes = graph.getAllNodesData();
    const edges = graph.getAllEdgesData();

    edgeBundling.bundling({
      nodes,
      edges,
    });
  }, 1000);

  return graph;
};
