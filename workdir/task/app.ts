
export interface person {
    name: string;
    location: string;
  }
  
  interface Output {
    boarded: person[];
    reservation: person[];
    count: number;
  }
  
  
  // type, enum, interface, generics, tuples
  const taskOne = (passengers: number, shuffle: number): Output => {
    //complete your work here
  
    let location = ["Abuja", "Benue", "Katsina", "Lagos", "Sambisa"];
    let generatePassengers = (startIndex: number, endIndex: number) => {
      let listOfPassengers: person[] = [];
      let count = 0;
  
      for (let start = startIndex; start <= endIndex; start++) {
        let passenger = {
          name: `passenger${start}`,
          location: location[count % location.length],
        };
  
        listOfPassengers.push(passenger);
        count++;
      }
  
      console.log(listOfPassengers);
  
      return listOfPassengers;
    };
  
    let maxPossibleTrips = shuffle + 1;
    let mulOFTogo = (passengers / 50) | 0;
    let requiredTrips = mulOFTogo;
  
    let reservationCount = passengers % 5;
    let peopleLeftAfterFiftyCount = passengers - requiredTrips * 50;
    let extraPassengers = ((peopleLeftAfterFiftyCount / 5) | 0) * 5;
  
    if (peopleLeftAfterFiftyCount > 4) {
      requiredTrips++;
    }
  
    let possibleTrips = Math.min(requiredTrips, maxPossibleTrips);
  
    if (possibleTrips < requiredTrips) {
      let boarded = generatePassengers(1, 50);
      let reservation = generatePassengers(51, reservationCount);
      return {
        boarded,
        reservation,
        count: possibleTrips,
      };
    } else {
      let start =
        peopleLeftAfterFiftyCount > 4
          ? mulOFTogo * 50 + 1
          : mulOFTogo * 50 - 50 + 1;
      let end =
        peopleLeftAfterFiftyCount > 4
          ? mulOFTogo * 50 + extraPassengers
          : mulOFTogo * 50;
      let boarded = generatePassengers(start, end);
      let reservation = reservationCount
        ? generatePassengers(end + 1, end + reservationCount)
        : [];
  
      let count = possibleTrips;
  
      return {
        boarded,
        reservation,
        count,
      };
    }
  };

export default taskOne;