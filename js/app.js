//app.js
//----Model---
var initialLocs=[
  {
    title:'Simhachalam Temple',
    location:{lat: 17.7651572, lng: 83.2584714},
    img:'img/Simhachalam-temple.jpg',
    type:'Spirtual'
  },
  {
    title:'Kailasagiri',
    location:{lat: 17.7492158, lng: 83.3400129},
    img:'img/Kailasagiri.jpg',
    type:'Leisure'
  },
  {
    title:'Submarine Musuem',
    location:{lat: 17.7174607, lng: 83.328343},
    img:'img/museum.jpg',
    type:'Leisure'
  },
  {
    title:'Visakhapatnam Airport',
    location:{lat: 17.7276574, lng: 83.221521},
    img:'img/Airport.jpg',
    type:'Travel'
  },
  {
    title:'CMR Central',
    location:{lat: 17.7340488, lng: 83.3163009},
    img:'img/CMR.jpg',
    type:'Shopping'
  },
  {
    title:'The Gateway Hotel',
    location:{lat: 17.7116088, lng: 83.3145753},
    img:'img/Gateway.jpg',
    type:'Travel'
  }
];

//---View Model---

var ViewModel=function(){
  var self=this;
  this.locList=ko.observableArray([]);
  this.clickedLoc=ko.observable();
  this.chosenLoc=ko.observable();
  this.currentLoc=ko.observableArray([]);
  this.categoryList=ko.observableArray([]);


  initialLocs.forEach(function(locItem){
      self.locList.push(new Loc(locItem));
      self.currentLoc.push(new Loc(locItem));
      if (!self.categoryList().includes(new Loc(locItem).type()))
          self.categoryList().push(new Loc(locItem).type());
    });

  this.setLocation=function(clickedLocation,item){
    //console.log(self.clickedLoc());
      self.currentLoc([]);
      //markers=[];
      if(!self.clickedLoc()){

        self.currentLoc(self.locList());
        for(var i=0;i<markers.length;i++){
              markers[i].setVisible(true);
              markers[i].setIcon(defaultIcon);
            };
      }
      else{
          for(var i=0;i<markers.length;i++){
              markers[i].setVisible(false);
            };

          for(var i=0;i<self.locList().length;i++){
            if(self.locList()[i].type()=== self.clickedLoc()){
            self.currentLoc.push(self.locList()[i]);
            markers[i].setVisible(true);
            markers[i].setIcon(defaultIcon);

          }
        }
      }
    };

  this.chosenL=function(chosenLocation){
      self.chosenLoc(chosenLocation);
      listClick();
    };
}

// Constructor
var Loc=function(data){
  this.title=ko.observable(data.title);
  this.location=ko.observable(data.location);
  this.img=ko.observable(data.img);
  this.type=ko.observable(data.type);
}

// Making the ViewModel global for access from initMap
var vm = new ViewModel();
ko.applyBindings(vm);
