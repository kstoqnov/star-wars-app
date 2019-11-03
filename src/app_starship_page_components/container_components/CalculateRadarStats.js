
export const CalculateRadarStats = (sameClass, ship) => {
    if(sameClass.length === 0){
      const data = {
        data: {
          maxAtmosphericSpeed: 1,
          maxMLPerHour: 1,
          hyperdriveRating: 1,
          crew: 1,
          cost: 1
      }}
      return data;
    }
    const maxCrew = Math.max.apply(Math, sameClass.map(edge => edge.node.crew))
    const minCrew = Math.min.apply(Math, sameClass.map(edge => edge.node.crew))
    const maxCost = Math.max.apply(Math, sameClass.map(edge => edge.node.cost))
    const minCost = Math.min.apply(Math, sameClass.map(edge => edge.node.cost))
    const maxHyperdriveRating = Math.max.apply(Math, sameClass.map(edge => edge.node.hyperdriveRating))
    const minHyperdriveRating = Math.min.apply(Math, sameClass.map(edge => edge.node.hyperdriveRating))
    const maxMaxAtmosphericSpeed = Math.max.apply(Math, sameClass.map(edge => edge.node.maxAtmosphericSpeed))
    const minMaxAtmosphericSpeed = Math.min.apply(Math, sameClass.map(edge => edge.node.maxAtmosphericSpeed))
    const maxMaxMLPerHour = Math.max.apply(Math, sameClass.map(edge => edge.node.maxMLPerHour))
    const minMaxMLPerHour = Math.min.apply(Math, sameClass.map(edge => edge.node.maxMLPerHour))
  
    const crew = maxCrew === minCrew || ship.crew > maxCrew ? 1 : (ship.crew - minCrew) / (maxCrew - minCrew)
    const cost = maxCost === minCost || ship.cost > maxCost ? 1: (ship.cost - minCost) / (maxCost - minCost)
    const hyperdriveRating = maxHyperdriveRating === minHyperdriveRating || 
    ship.hyperdriveRating > maxMaxAtmosphericSpeed ? 1 :
    (ship.hyperdriveRating - minHyperdriveRating) / (maxHyperdriveRating - minHyperdriveRating)
    const maxAtmosphericSpeed = maxMaxAtmosphericSpeed === minMaxAtmosphericSpeed || 
    ship.maxAtmosphericSpeed > maxMaxAtmosphericSpeed ? 1 : 
    (ship.maxAtmosphericSpeed - minMaxAtmosphericSpeed) / (maxMaxAtmosphericSpeed - minMaxAtmosphericSpeed)
    const maxMLPerHour = maxMaxMLPerHour === minMaxMLPerHour || 
    ship.maxMLPerHour > maxMaxMLPerHour ? 1 : 
    (ship.maxMLPerHour - minMaxMLPerHour) / (maxMaxMLPerHour - minMaxMLPerHour)
  
    const data = {
      data: {
        maxAtmosphericSpeed: maxAtmosphericSpeed,
        maxMLPerHour: maxMLPerHour,
        hyperdriveRating: hyperdriveRating,
        crew: crew,
        cost: cost
    }}
  
    return data
};
