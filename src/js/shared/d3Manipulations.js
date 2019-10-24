import * as d3 from 'd3';

const createHintOne = () => {
  const paths = d3.select('.vegaViz1 > svg').selectAll('path');
  const oneCell = d3.select(paths.nodes()[38]);
  const oneCellBox = oneCell.node().getBBox();

  const hint1Group = d3
    .select('.vegaViz1 > svg')
    .select('.layer_0_marks')
    .append('g')
    .classed('customD3Hints', true);

  hint1Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', oneCellBox.x + oneCellBox.width / 2)
    .attr('cy', oneCellBox.y + oneCellBox.height / 2)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');
  hint1Group
    .append('text')
    .attr('x', oneCellBox.x + oneCellBox.width / 2)
    .attr('y', oneCellBox.y + oneCellBox.height / 2 + 5)
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('1');

  return 1;
};

const createHintTwo = () => {
  const xAxisText = d3.select(d3.selectAll('.role-axis-title').nodes()[0]);
  const yAxisText = d3.select(d3.selectAll('.role-axis-title').nodes()[1]);

  xAxisText.select('text').style('fill', '#C51B7D');
  yAxisText.select('text').style('fill', '#C51B7D');

  const paths = d3.select('.vegaViz1 > svg').selectAll('path');
  const oneCell = d3.select(paths.nodes()[3]);
  const oneCellBox = oneCell.node().getBBox();

  const hint2Group = d3
    .select('.vegaViz1 > svg')
    .select('.layer_0_marks')
    .append('g')
    .classed('customD3Hints', true);

  hint2Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', oneCellBox.x - oneCellBox.width / 2 + 5)
    .attr('cy', oneCellBox.y - oneCellBox.height / 2 + 5)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');
  hint2Group
    .append('text')
    .attr('x', oneCellBox.x - oneCellBox.width / 2 + 5)
    .attr('y', oneCellBox.y - oneCellBox.height / 2 + 10)
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('2');

  return 2;
};

const createHintThree = () => {
  const legend = d3.select('.vegaViz1 > svg').select('.role-legend-title');
  const legendTextLen = legend
    .select('text')
    .node()
    .getComputedTextLength();

  legend
    .select('text')
    .style('fill', '#C51B7D')
    .attr('font-weight', 'bolder');

  const hint3Group = legend.append('g').classed('customD3Hints', true);

  hint3Group
    .append('circle')
    .attr('r', 10)
    .attr('cx', legendTextLen + 16)
    .attr('cy', 1)
    .style('stroke', '#C51B7D')
    .style('fill', '#C51B7D');
  hint3Group
    .append('text')
    .attr('x', legendTextLen + 16)
    .attr('y', 6)
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .text('3');

  return 3;
};

const createHintFour = () => {
  return 4;
};

const createHintFive = () => {
  return 5;
};

const createHintSix = () => {
  return 6;
};

const removeAllHints = () => {
  d3.selectAll('.customD3Hints').remove();

  // Custom Changes to the elements itself and not additions
  const xAxisText = d3.select(d3.selectAll('.role-axis-title').nodes()[0]);
  const yAxisText = d3.select(d3.selectAll('.role-axis-title').nodes()[1]);

  xAxisText.select('text').style('fill', 'rgb(0,0,0)');
  yAxisText.select('text').style('fill', 'rgb(0,0,0)');

  const legend = d3.select('.vegaViz1 > svg').select('.role-legend-title');

  legend
    .select('text')
    .style('fill', 'rgb(0,0,0)')
    .attr('font-weight', 'bold');
};

export {
  createHintOne,
  createHintTwo,
  createHintThree,
  createHintFour,
  createHintFive,
  createHintSix,
  removeAllHints
};
