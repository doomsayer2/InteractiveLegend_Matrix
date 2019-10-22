const sourceData1 = require("./data/tempOslo.json"); // Oslo Chart data
const sourceData2 = require("./data/tempTallinn.json"); // Tallinn Chart data
const sourceData3 = require("./data/tempMunich.json"); // Munich Chart data

const TEXTS = {
  ONE: 'The chart is based on colored cells.',
  TWO:
    'The <span class="hT">average temperature change</span> per <span class="hT">month</span> is plotted in columns and the <span class="hT">cities</span> in rows. ',
  THREE:
    'A darker color indicates a bigger <span class="hT">difference in average temperature</span> and a light color a smaller difference (<span class="hT">blue</span> = negative value change, <span class="hT">white</span> = no change, <span class="hT">brown</span> = positive value change).',
  FOUR:
    '<span class="hT">Munich</span> shows a major temperature change in <span class="hT">February</span> (between the two years).',
  FIVE:
    'In <span class="hT">Tallinn</span>, the <span class="hT">average temperature</span> increased in the last <span class="hT">quarter</span>.',
  SIX:
    'Across all <span class="hT">cities</span>, there is more change visible in the <span class="hT">first half</span> of the year than in the <span class="hT">second half</span> of the year.'
};

const TEXTGROUPS = {
  g1: "Reading",
  g2: "Using"
};

export class ConcreteDataProvider {
  getVizData(chartID) {
    switch (chartID) {
      case 1:
        return this.viz;
      case 2:
        return this.viz2;
      case 3:
        return this.viz3;
      default:
        return this.viz;
    }
  }

  getSingleHintData(hintId) {
    switch (hintId) {
      case 1:
        return this.hint_1;
      case 2:
        return this.hint_2;
      case 3:
        return this.hint_3;
      case 4:
        return this.hint_4;
      case 5:
        return this.hint_5;
      case 6:
        return this.hint_6;
      default:
        return this.hint_1;
    }
  }

  getAllHintData() {
    return this.allHints;
  }

  constructor() {
    // Config for first chart -- here it is Oslo
    this.viz = {
      mark: { type: "bar" },
      spec: {
        mark: { type: "bar" },
        encoding: {
          x: {
            field: "date",
            type: "ordinal",
            axis: {
              title: "Month",
              labelAngle: 0
            }
          },
          y: {
            field: "temp",
            type: "quantitative",
            title: "Average temperature in °C"
          },
          color: {
            value: "lightgrey"
          }
        },
        title: "Average temperature in Oslo, Norway in 2018",
        width: 400
      },
      data: {
        values: sourceData1
      }
    };

    // Config for the second chart -- here it is
    this.viz2 = {
      mark: { type: "bar" },
      spec: {
        mark: { type: "bar" },
        encoding: {
          x: {
            field: "date",
            type: "ordinal",
            axis: {
              title: "Month",
              labelAngle: 0
            }
          },
          y: {
            field: "temp",
            type: "quantitative",
            title: "Average temperature in °C"
          }, 
          color: {
            value: "lightgrey"
          }
        },
        title: "Average temperature in Tallinn, Estonia in 2018",
        width: 400
      },
      data: {
        values: sourceData2
      }
    };

    // Config for the third chart -- here it is
    this.viz3 = {
      mark: { type: "bar" },
      spec: {
        mark: { type: "bar" },
        encoding: {
          x: {
            field: "date",
            type: "ordinal",
            axis: {
              title: "Month",
              labelAngle: 0
            }
          },
          y: {
            field: "temp",
            type: "quantitative",
            title: "Average temperature in °C"
          }, 
          color: {
            value: "lightgrey"
          }
        },
        title: "Average temperature in Munich, Germany in 2018",
        width: 400
      },
      data: {
        values: sourceData3
      }
    };

    this.hint_1 = {
      hintID: 1,
      text: {
        h1: `<div class="vizHint">${TEXTS.ONE}</div>`
      },
      group: `${TEXTGROUPS.g1}`
    };

    this.hint_2 = {
      hintID: 2,
      text: {
        h2: `<div class="vizHint">${TEXTS.TWO}</div>`
      },
      group: `${TEXTGROUPS.g1}`
    };

    this.hint_3 = {
      hintID: 3,
      text: {
        h3: `<div class="vizHint">${TEXTS.THREE}</div>`
      },
      group: `${TEXTGROUPS.g1}`
    };

    this.hint_4 = {
      hintID: 4,
      text: {
        h4: `<div class="vizHint">${TEXTS.FOUR}</div>`
      },
      group: `${TEXTGROUPS.g2}`
    };

    this.hint_5 = {
      hintID: 5,
      text: {
        h5: `<div class="vizHint">${TEXTS.FIVE}</div>`
      },
      group: `${TEXTGROUPS.g2}`
    };

    this.hint_6 = {
      hintID: 6,
      text: {
        h6: `<div class="vizHint">${TEXTS.SIX}</div>`
      },
      group: `${TEXTGROUPS.g2}`
    };

    this.allHints = {
      hintIDs: [
        this.hint_1.hintID,
        this.hint_2.hintID,
        this.hint_3.hintID,
        this.hint_4.hintID,
        this.hint_5.hintID,
        this.hint_6.hintID
      ],
      text: [
        {
          h1: `<div class="vizHint">${TEXTS.ONE}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h2: `<div class="vizHint">${TEXTS.TWO}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h3: `<div class="vizHint">${TEXTS.THREE}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h4: `<div class="vizHint">${TEXTS.FOUR}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h5: `<div class="vizHint">${TEXTS.FIVE}</div>`,
          group: `${TEXTGROUPS.g2}`
        },
        {
          h6: `<div class="vizHint">${TEXTS.SIX}</div>`,
          group: `${TEXTGROUPS.g2}`
        }
      ]
    };
  }
}
