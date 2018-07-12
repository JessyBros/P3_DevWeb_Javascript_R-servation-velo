function regroupementDesMarqueurs(){
    var clusterStyles = [

 {
    textColor: 'black',
    url: 'images/cycling.png',
    height: 30,
    width: 32
  }
];
var mcOptions = {
    gridSize: 150, // gestion des regroupements des icons (nombres)
    styles: clusterStyles,
    maxZoom: 15 // icon cluster à une portée de 15.
};
var mc= new MarkerClusterer(map, marqueurs, mcOptions);
    
}
