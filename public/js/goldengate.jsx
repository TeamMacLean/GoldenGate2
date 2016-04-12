var animation = 'shake';
var initParts = [
  {
    id: 'A1',
    size: 1,
    label: 'DIST',
    compatible: ['A2'],
    childParts: []
  },
  {
    id: 'A2',
    size: 1,
    label: 'PROX',
    compatible: ['A1', 'A3'],
    childParts: []
  },
  {
    id: 'A3',
    size: 1,
    label: 'CORE',
    compatible: ['A2', 'B1'],
    childParts: []
  },
  {
    id: 'B1',
    size: 1,
    label: '5UTR',
    compatible: ['A3', 'B2'],
    childParts: []
  },
  {
    id: 'B2',
    size: 1,
    label: 'NTAG',
    compatible: ['B1', 'B3'],
    childParts: []
  },
  {
    id: 'B3',
    size: 1,
    label: 'CDS1',
    compatible: ['B2', 'B4'],
    childParts: []
  },
  {
    id: 'B4',
    size: 1,
    label: 'CDS2',
    compatible: ['B3', 'B5'],
    childParts: []
  },
  {
    id: 'B5',
    size: 1,
    label: 'CTAG',
    compatible: ['B4', 'B6'],
    childParts: []
  },
  {
    id: 'B6',
    size: 1,
    label: '3UTR',
    compatible: ['B5', 'C1'],
    childParts: []
  },
  {
    id: 'C1',
    size: 1,
    label: 'TERM',
    compatible: ['B6'],
    childParts: []
  }

];

var otherParts = [
  {
    id: 'DISTPROX',
    size: 2,
    label: 'DIST + PROX',
    compatible: [],
    childParts: ['A1', 'A2']
  },
  {
    id: 'DISTPROXCORE',
    size: 3,
    label: 'DIST + PROX + CORE',
    compatible: [],
    childParts: ['DISTPROX', 'A3']
  },
  {
    id: 'DISTPROXCORE5UTR',
    size: 4,
    label: 'DIST + PROX + CORE + 5UTR',
    compatible: [],
    childParts: ['DISTPROXCORE', 'B1']
  },
  {
    id: 'DISTPROXCORE5UTRNTAG',
    size: 5,
    label: 'DIST + PROX + CORE + 5UTR + NTAG',
    compatible: [],
    childParts: ['DISTPROXCORE5UTR', 'B2']
  },
  {
    id: 'DISTPROXCORE5UTRNTAGCDS1',
    size: 6,
    label: 'DIST + PROX + CORE + 5UTR + NTAG + CDS1',
    compatible: [],
    childParts: ['DISTPROXCORE5UTRNTAG', 'B3']
  },
  {
    id: 'DISTPROXCORE5UTRNTAGCDS1CDS2',
    size: 7,
    label: 'DIST + PROX + CORE + 5UTR + NTAG + CDS1 + CDS2',
    compatible: [],
    childParts: ['DISTPROXCORE5UTRNTAGCDS1', 'B4']
  },
  {
    id: 'DISTPROXCORE5UTRNTAGCDS1CDS2CTAG',
    size: 8,
    label: 'DIST + PROX + CORE + 5UTR + NTAG + CDS1 + CDS2 + CTAG',
    compatible: [],
    childParts: ['DISTPROXCORE5UTRNTAGCDS1CDS2', 'B5']
  },
  {
    id: 'DISTPROXCORE5UTRNTAGCDS1CDS2CTAG3UTR',
    size: 9,
    label: 'DIST + PROX + CORE + 5UTR + NTAG + CDS1 + CDS2 + CTAG + 3UTR',
    compatible: [],
    childParts: ['DISTPROXCORE5UTRNTAGCDS1CDS2CTAG', 'B6']
  },
  {
    id: 'DISTPROXCORE5UTRNTAGCDS1CDS2CTAG3UTRTERM',
    size: 10,
    label: 'DIST + PROX + CORE + 5UTR + NTAG + CDS1 + CDS2 + CTAG + 3UTR + TERM',
    compatible: [],
    childParts: ['DISTPROXCORE5UTRNTAGCDS1CDS2CTAG3UTR', 'C1']
  },
  {
    id: 'PROXCORE',
    size: 2,
    label: 'PROX + CORE',
    compatible: [],
    childParts: ['A2', 'A3']
  },
  {
    id: 'CORE5UTR',
    size: 2,
    label: 'CORE + 5UTR',
    compatible: [],
    childParts: ['A3', 'B1']
  },
  {
    id: '5UTRNTAG',
    size: 2,
    label: '5UTR + NTAG',
    compatible: [],
    childParts: ['B1', 'B2']
  },
  {
    id: 'NTAGCDS1',
    size: 2,
    label: 'NTAG + CDS1',
    compatible: [],
    childParts: ['B2', 'B3']
  },
  {
    id: 'CDS1CDS2',
    size: 2,
    label: 'CDS1 + CDS2',
    compatible: [],
    childParts: ['B3', 'B4']
  },
  {
    id: 'CDS2CTAG',
    size: 2,
    label: 'CDS2 + CTAG',
    compatible: [],
    childParts: ['B4', 'B5']
  },
  {
    id: 'CTAG3UTR',
    size: 2,
    label: 'CTAG + 3UTR',
    compatible: [],
    childParts: ['B5', 'B6']
  },
  {
    id: '3UTRTERM',
    size: 2,
    label: '3UTR + TERM',
    compatible: [],
    childParts: ['B6', 'C1']
  },
  {
    id: 'DISTPROXCORE5URT',
    size: 4,
    label: 'DIST+PROX+CORE+5URT',
    compatible: [],
    childParts: ['DISTPROX', 'CORE5UTR']
  },
  {
    id: 'NTAGCDS1CDS2CTAG',
    size: 4,
    label: 'NTAG+CDS1+CDS2+CTAG',
    compatible: [],
    childParts: ['NTAGCDS1', 'CDS2CTAG']
  },
  {
    id: 'DISTPROXCORE5URTNTAGCDS1CDS2CTAG',
    size: 8,
    label: 'DIST+PROX+CORE+5URT+NTAG+CDS1+CDS2+CTAG',
    compatible: [],
    childParts: ['DISTPROXCORE5URT', 'NTAGCDS1CDS2CTAG']
  },
  {
    id: 'DISTPROXCORE5URTNTAGCDS1CDS2CTAG3UTRTERM',
    size: 10,
    label: 'DIST+PROX+CORE+5URT+NTAG+CDS1+CDS2+CTAG+3UTR+TERM',
    compatible: [],
    childParts: ['DISTPROXCORE5URTNTAGCDS1CDS2CTAG', '3UTRTERM']
  },
  {
    id: 'CTAG3UTRTERM',
    size: 3,
    label: 'CTAG + 3UTR + TERM',
    compatible: [],
    childParts: ['B5', '3UTRTERM']
  },
  {
    id: 'CDS2CTAG3UTRTERM',
    size: 4,
    label: 'CDS2 + CTAG + 3UTR + TERM',
    compatible: [],
    childParts: ['B4', 'CTAG3UTRTERM']
  },
  {
    id: 'CDS1CDS2CTAG3UTRTERM',
    size: 5,
    label: 'CDS1 + CDS2 + CTAG + 3UTR + TERM',
    compatible: [],
    childParts: ['B3', 'CDS2CTAG3UTRTERM']
  },
  {
    id: 'NTAGCDS1CDS2CTAG3UTRTERM',
    size: 6,
    label: 'NTAG + CDS1 + CDS2 + CTAG + 3UTR + TERM',
    compatible: [],
    childParts: ['B2', 'CDS1CDS2CTAG3UTRTERM']
  },
  {
    id: '5UTRNTAGCDS1CDS2CTAG3UTRTERM',
    size: 7,
    label: '5UTR + NTAG + CDS1 + CDS2 + CTAG + 3UTR + TERM',
    compatible: [],
    childParts: ['B1', 'NTAGCDS1CDS2CTAG3UTRTERM']
  },
  {
    id: 'CORE5UTRNTAGCDS1CDS2CTAG3UTRTERM',
    size: 8,
    label: 'CORE + 5UTR + NTAG + CDS1 + CDS2 + CTAG + 3UTR + TERM',
    compatible: [],
    childParts: ['A3', '5UTRNTAGCDS1CDS2CTAG3UTRTERM']
  },
  {
    id: 'PROXCORE5UTRNTAGCDS1CDS2CTAG3UTRTERM',
    size: 9,
    label: 'PROX + CORE + 5UTR + NTAG + CDS1 + CDS2 + CTAG + 3UTR + TERM',
    compatible: [],
    childParts: ['A2', 'CORE5UTRNTAGCDS1CDS2CTAG3UTRTERM']
  },
  {
    id: 'DISTPROXCORE5UTRNTAGCDS1CDS2CTAG3UTRTERM',
    size: 10,
    label: 'DIS + PROX + CORE + 5UTR + NTAG + CDS1 + CDS2 + CTAG + 3UTR + TERM',
    compatible: [],
    childParts: ['A1', 'PROXCORE5UTRNTAGCDS1CDS2CTAG3UTRTERM']
  }

];

var allParts = initParts.concat(otherParts);


var Part = React.createClass({

  canMerge: function (i, n) {
    var self = this;

    var compatible = allParts.filter(function (ap) {
      var current = self.props.partsActive[i];
      var next = self.props.partsActive[n];

      var h1 = ap.childParts.indexOf(current.id);
      var h2 = ap.childParts.indexOf(next.id);

      return h1 > -1 && h2 > -1;
    });
    return !!compatible.length;

  },
  render: function () {

    var split = {};
    var leftMerge = {};
    var rightMerge = {};

    if (this.props.partType.size > 1) {
      split = <span className="split" onClick={this.props.split.bind(this,this)}>&times;</span>
    }

    if (this.props.index > 0 && this.canMerge(this.props.index, this.props.index - 1)) {
      leftMerge = <span className="merge left" onClick={this.props.mergeLeft.bind(this, this)}>&#171;</span>;

    }
    if (this.props.index + 1 < this.props.maxLength && this.canMerge(this.props.index, this.props.index + 1)) {
      rightMerge = <span className="merge right"
                         onClick={this.props.mergeRight.bind(this, this)}>&#187;</span>;
    }


    return (
      <div className={'size'+this.props.partType.size} id={this.props.partType.id}
           key={this.props.partType.id}>
        <div className="part">
          <span className="partLabel">{this.props.partType.label}</span>
          <select>
            <option>a</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
          </select>
          <div className="options">
            {leftMerge}
            {split}
            {rightMerge}
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }
});

var Bridge = React.createClass({

  getInitialState: function () {
    return {partsActive: initParts};
  },
  merge: function (part, n) {
    var realPart = part.props.partType;
    var realPartIndex = this.state.partsActive.indexOf(realPart);
    if (n == -1) {
      realPartIndex -= 1;
    }
    var sideIndex = this.state.partsActive.indexOf(realPart) + n;
    if (sideIndex > -1 && sideIndex <= this.state.partsActive.length - 1) {
      var sidePart = this.state.partsActive[sideIndex];

      var compatiblePart = allParts.filter(function (ap) {

        var indexOfL = ap.childParts.indexOf(realPart.id);
        var indexOfR = ap.childParts.indexOf(sidePart.id);

        return indexOfL > -1 && indexOfR > -1;
      });

      if (compatiblePart.length) {
        var newPartsActive = this.state.partsActive.filter(function (pa) {
          return pa != sidePart && pa != realPart;
        });

        newPartsActive.splice(realPartIndex, 0, compatiblePart[0]);
        this.setState({partsActive: newPartsActive});
      } else {
        var domEl = part.getDOMNode();
        animate(domEl, animation);
        console.error('no compatible part');
      }


    } else {
      var nothingRightEL = part.getDOMNode();
      animate(nothingRightEL, animation);
      console.error('nothing to right');
    }
  },
  mergeLeft: function (part) {
    this.merge(part, -1);
  },
  mergeRight: function (part) {
    this.merge(part, 1);
  },
  split: function (s) {

    var index = s.props.index;

    var newPA = this.state.partsActive.slice();
    newPA.splice(index, 1);

    var count = -1;
    s.props.partType.childParts.forEach(function (p) {
      allParts.forEach(function (ap) {
        if (ap.id == p) {
          count++;
          newPA.splice(index + count, 0, ap);
        }
      });
    });

    this.setState({partsActive: newPA});


  },
  render: function () {
    var self = this;
    return (
      <div>
        {this.state.partsActive.map(function (part, i) {

          return (
            <Part partType={part} mergeLeft={self.mergeLeft} mergeRight={self.mergeRight}
                  index={i} maxLength={self.state.partsActive.length}
                  partsActive={self.state.partsActive} split={self.split}/>
          )
        })}
      </div>
    )
  },
  componentDidMount: function () {
    $(function () {
      $('.page-loader').hide();
    });
  }
});
React.render(<Bridge/>, document.getElementById('bridge'));