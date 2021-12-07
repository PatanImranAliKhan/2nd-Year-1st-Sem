import { Injectable } from '@angular/core';
import { Type } from './Type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Cricket: Type[] = [
    {
      name: 'Cricket Bat',
      image: 'assets/cribat.png',
      description: '',
      price: 600,
      availability: 1
    },
    {
      name: 'Cricket HotTennisBall',
      image: 'assets/criball1.png',
      description: '',
      price: 75,
      availability: 1
    },
    {
      name: 'Cricket corkBall',
      image: 'assets/criball.png',
      description: '',
      price: 150,
      availability: 1
    },
    {
      name: '3 Cricket bats',
      image: 'assets/bat1.png',
      description: '',
      price: 1500,
      availability: 1
    },
    {
      name: 'Cricket Wickets',
      image: 'assets/wickets.png',
      description: '',
      price: 750,
      availability: 1
    },
    {
      name: 'Cricket Jersey',
      image: 'assets/crijersey.png',
      description: '',
      price: 300,
      availability: 1
    },
    {
      name: 'Rohit Sharma Jersey',
      image: 'assets/rohitjersey.png',
      description: '',
      price: 309,
      availability: 1
    },
    {
      name: 'MsDhoni Jersey',
      image: 'assets/dhonijersey.png',
      description: '',
      price: 419,
      availability: 1
    },
    {
      name: 'Batting Helmet',
      image: 'assets/crihelmet.png',
      description: '',
      price: 900,
      availability: 1
    },
    {
      name: 'Keeper Glove ',
      image: 'assets/keepglove.png',
      description: '',
      price: 500,
      availability: 1
    },
    {
      name: 'Cricket Kit',
      image: 'assets/cricketkit.png',
      description: '',
      price: 3000,
      availability: 1
    },
    {
      name: 'Batting glove',
      image: 'assets/criglove.png',
      description: '',
      price: 345,
      availability: 1
    },
    {
      name: 'shoe',
      image: 'assets/crishoe.png',
      description: '',
      price: 900,
      availability: 1
    }
  ];
  FootBall: Type[] = [
    {
      name: 'Foot ball',
      image: 'assets/football.png',
      description: '',
      price: 270,
      availability: 1
    },
    {
      name: 'Foot ball net',
      image: 'assets/footballnet.png',
      description: '',
      price: 1250,
      availability: 1
    },
    {
      name: 'Foot ball net',
      image: 'assets/footballnet1.png',
      description: '',
      price: 1050,
      availability: 1
    },
    {
      name: 'shoe',
      image: 'assets/footballshoe.png',
      description: '',
      price: 670,
      availability: 1
    },
    {
      name: 'Ronaldo Jersey',
      image: 'assets/ronaldojersey.png',
      description: '',
      price: 429,
      availability: 1
    },
    {
      name: 'messi jerssey',
      image: 'assets/messijersey.png',
      description: '',
      price: 390,
      availability: 1
    },
    {
      name: 'foot ball shinpad',
      image: 'assets/footballshippad.png',
      description: '',
      price: 125,
      availability: 1
    }
  ];
  Badminton: Type[] = [
    {
      name: 'Badminton Rocket',
      image: 'assets/badmintonbat.png',
      description: '',
      price: 270,
      availability: 1
    },
    {
      name: 'Shuttle cock',
      image: 'assets/cock.png',
      description: '',
      price: 150,
      availability: 1
    },
    {
      name: 'Badminton 2-Rocket with 2-cock',
      image: 'assets/badminrocock.png',
      description: '',
      price: 150,
      availability: 1
    },
    {
      name: 'Shuttle cock with LEDlight',
      image: 'assets/badmincocklight.png',
      description: '',
      price: 900,
      availability: 1
    },
    {
      name: 'Badminton Kit',
      image: 'assets/badmintonkit.png',
      description: '',
      price: 1070,
      availability: 1
    },
    {
      name: 'Badminton net',
      image: 'assets/badmintonnet.png',
      description: '',
      price: 325,
      availability: 1
    }
  ];
  Hockey: Type[] = [
    {
      name: 'Hockey Stick',
      image: 'assets/hocbat.png',
      description: '',
      price: 329,
      availability: 1
    },
    {
      name: 'Hockey ball',
      image: 'assets/hocball.png',
      description: '',
      price: 180,
      availability: 1
    },
    {
      name: 'Hockey net',
      image: 'assets/hocnet.png',
      description: '',
      price: 800,
      availability: 1
    },
    {
      name: 'Hockey Stick with net',
      image: 'assets/hocsticknet.png',
      description: '',
      price: 1450,
      availability: 1
    },
    {
      name: 'Hockey Player Kit',
      image: 'assets/hockeypack.png',
      description: '',
      price: 1150,
      availability: 1
    },
    {
      name: 'Hockey jersey',
      image: 'assets/hocjersey.png',
      description: '',
      price: 300,
      availability: 1
    },
    {
      name: 'shoe',
      image: 'assets/hocshoe.png',
      description: '',
      price: 412,
      availability: 1
    },
    {
      name: 'keeper kit',
      image: 'assets/hockey kit.png',
      description: '',
      price: 10000,
      availability: 1
    }
  ];
  Golf: Type[] = [
    {
      name: 'Golf bat',
      image: 'assets/golfbat.png',
      description: '',
      price: 270,
      availability: 1
    },
    {
      name: 'Golf ball',
      image: 'assets/golfball.png',
      description: '',
      price: 340,
      availability: 1
    },
    {
      name: 'Golf kit',
      image: 'assets/golfkit.png',
      description: '',
      price: 4000,
      availability: 1
    },
    {
      name: 'Golf glove',
      image: 'assets/golfg.png',
      description: '',
      price: 470,
      availability: 1
    },
    {
      name: 'Golf Mini Kit',
      image: 'assets/golfminikit.png',
      description: '',
      price: 1800,
      availability: 1
    },
    {
      name: 'Golf Ball Put',
      image: 'assets/golfballput.png',
      description: '',
      price: 560,
      availability: 1
    }
  ];
  All: Type[] = [
    {
      name: 'Cricket Bat',
      image: 'assets/cribat.png',
      description: '',
      price: 600,
      availability: 1
    },
    {
      name: 'Cricket HotTennisBall',
      image: 'assets/criball1.png',
      description: '',
      price: 75,
      availability: 1
    },
    {
      name: 'Cricket corkBall',
      image: 'assets/criball.png',
      description: '',
      price: 150,
      availability: 1
    },
    {
      name: '3 CricketBats',
      image: 'assets/bat1.png',
      description: '',
      price: 1500,
      availability: 1
    },
    {
      name: 'Cricket Wickets',
      image: 'assets/wickets.png',
      description: '',
      price: 750,
      availability: 1
    },
    {
      name: 'Cricket Jersey',
      image: 'assets/crijersey.png',
      description: '',
      price: 300,
      availability: 1
    },
    {
      name: 'Rohit Sharma Jersey',
      image: 'assets/rohitjersey.png',
      description: '',
      price: 309,
      availability: 1
    },
    {
      name: 'MsDhoni Jersey',
      image: 'assets/dhonijersey.png',
      description: '',
      price: 419,
      availability: 1
    },
    {
      name: 'Batting Helmet',
      image: 'assets/crihelmet.png',
      description: '',
      price: 900,
      availability: 1
    },
    {
      name: 'Keeper Glove ',
      image: 'assets/keepglove.png',
      description: '',
      price: 500,
      availability: 1
    },
    {
      name: 'Cricket Kit',
      image: 'assets/cricketkit.png',
      description: '',
      price: 3000,
      availability: 1
    },
    {
      name: 'Batting glove',
      image: 'assets/criglove.png',
      description: '',
      price: 345,
      availability: 1
    },
    {
      name: 'shoe',
      image: 'assets/crishoe.png',
      description: '',
      price: 900,
      availability: 1
    },
    {
      name: 'Foot ball',
      image: 'assets/football.png',
      description: '',
      price: 270,
      availability: 1
    },
    {
      name: 'Foot ball net',
      image: 'assets/footballnet.png',
      description: '',
      price: 1250,
      availability: 1
    },
    {
      name: 'Foot ball net',
      image: 'assets/footballnet1.png',
      description: '',
      price: 1050,
      availability: 1
    },
    {
      name: 'shoe',
      image: 'assets/footballshoe.png',
      description: '',
      price: 670,
      availability: 1
    },
    {
      name: 'Ronaldo Jersey',
      image: 'assets/ronaldojersey.png',
      description: '',
      price: 429,
      availability: 1
    },
    {
      name: 'messi jerssey',
      image: 'assets/messijersey.png',
      description: '',
      price: 390,
      availability: 1
    },
    {
      name: 'foot ball shinpad',
      image: 'assets/footballshippad.png',
      description: '',
      price: 125,
      availability: 1
    },
    {
      name: 'Badminton Rocket',
      image: 'assets/badmintonbat.png',
      description: '',
      price: 270,
      availability: 1
    },
    {
      name: 'Shuttle cock',
      image: 'assets/cock.png',
      description: '',
      price: 150,
      availability: 1
    },
    {
      name: 'Badminton 2-Rocket with 2-cock',
      image: 'assets/badminrocock.png',
      description: '',
      price: 150,
      availability: 1
    },
    {
      name: 'Shuttle cock with LEDlight',
      image: 'assets/badmincocklight.png',
      description: '',
      price: 900,
      availability: 1
    },
    {
      name: 'Badminton Kit',
      image: 'assets/badmintonkit.png',
      description: '',
      price: 1070,
      availability: 1
    },
    {
      name: 'Badminton net',
      image: 'assets/badmintonnet.png',
      description: '',
      price: 325,
      availability: 1
    },
    {
      name: 'Hockey Stick',
      image: 'assets/hocbat.png',
      description: '',
      price: 329,
      availability: 1
    },
    {
      name: 'Hockey ball',
      image: 'assets/hocball.png',
      description: '',
      price: 180,
      availability: 1
    },
    {
      name: 'Hockey net',
      image: 'assets/hocnet.png',
      description: '',
      price: 800,
      availability: 1
    },
    {
      name: 'Hockey Stick with net',
      image: 'assets/hocsticknet.png',
      description: '',
      price: 1450,
      availability: 1
    },
    {
      name: 'Hockey Player Kit',
      image: 'assets/hockeypack.png',
      description: '',
      price: 1150,
      availability: 1
    },
    {
      name: 'Hockey jersey',
      image: 'assets/hocjersey.png',
      description: '',
      price: 300,
      availability: 1
    },
    {
      name: 'shoe',
      image: 'assets/hocshoe.png',
      description: '',
      price: 412,
      availability: 1
    },
    {
      name: 'keeper kit',
      image: 'assets/hockey kit.png',
      description: '',
      price: 10000,
      availability: 1
    },
    {
      name: 'Golf bat',
      image: 'assets/golfbat.png',
      description: '',
      price: 270,
      availability: 1
    },
    {
      name: 'Golf ball',
      image: 'assets/golfball.png',
      description: '',
      price: 340,
      availability: 1
    },
    {
      name: 'Golf kit',
      image: 'assets/golfkit.png',
      description: '',
      price: 4000,
      availability: 1
    },
    {
      name: 'Golf glove',
      image: 'assets/golfg.png',
      description: '',
      price: 470,
      availability: 1
    },
    {
      name: 'Golf Mini Kit',
      image: 'assets/golfminikit.png',
      description: '',
      price: 1800,
      availability: 1
    },
    {
      name: 'Golf Ball Put',
      image: 'assets/golfballput.png',
      description: '',
      price: 560,
      availability: 1
    }
  ];
  cart: Type[] = [];
  constructor() { }
  Addcart(): any
  {
    return this.cart;
  }
}
