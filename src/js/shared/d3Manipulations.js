import * as d3 from 'd3';

const createHintOne = () => {
  // const paths = d3.select('.vegaViz1 > svg').selectAll('path');
  // const oneBar = d3.select(paths.nodes()[5]);
  // const oneBarBox = oneBar.node().getBBox();

  // const hint1Group = d3
  //   .select('.vegaViz1 > svg')
  //   .select('.mark-rect')
  //   .append('g')
  //   .classed('customD3Hints', true);

  // hint1Group
  //   .append('circle')
  //   .attr('r', 10)
  //   .attr('cx', oneBarBox.x + 15)
  //   .attr('cy', oneBarBox.y - 12)
  //   .style('stroke', '#C51B7D')
  //   .style('fill', '#C51B7D');
  // hint1Group
  //   .append('text')
  //   .attr('x', oneBarBox.x + 15)
  //   .attr('y', oneBarBox.y - 6)
  //   .attr('text-anchor', 'middle')
  //   .attr('fill', 'white')
  //   .text('1');
  // hint1Group
  //   .append('rect')
  //   .attr('width', oneBarBox.width)
  //   .attr('height', oneBarBox.height)
  //   .attr('x', oneBarBox.x)
  //   .attr('y', oneBarBox.y)
  //   .attr('fill', '#C51B7D')  
  //   .attr('stroke-width', 2);

  return 1;
};

const createHintTwo = () => {
 
  return 2;
};

const createHintThree = () => {

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
