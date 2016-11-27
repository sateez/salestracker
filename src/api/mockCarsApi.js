import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const cars = [
  {
    title: 'A8Audi',
    cid: 3426412,
    desc: 'One thrilling vehicle combining the purist charm of a saloon, the distinct versatility of an Avant and the passionate dynamism of a coupé. Top sporting performance. Innovative technology. Impressive efficiency. The Audi A7 Sportback. A unique car',
    estSalesDaily: 33,
    estSalesMonthly: 399,
    estRevenuePerUnit: 123242,
    estRevenuePerMonth: 96464325,
    SalesDaily: 9,
    SalesMonthly: 99,
    RevenuePerUnit: 93242,
    RevenuePerMonth: 6464325,
    url: 'http://res.cloudinary.com/lightspeed-retail/image/upload/c_pad,h_256,q_75,w_256/bbvkvfcwm7s6vo9dm28t.jpg'
  },
  {
    title: 'Q7Audi',
    cid: 4543376,
    desc: 'The Audi Q7 is the result of an ambitious idea: never cease to improve. It is masculine, yet exudes lightness. Inside, it offers comfort at the highest level. With even more space for your imagination. The 3.0 TDI engine accelerates this powerhouse as a five-seater starting at an impressive 6.3 seconds from 0 to 100 km/h',
    estSalesDaily: 74,
    estSalesMonthly: 741,
    estRevenuePerUnit: 346748,
    estRevenuePerMonth: 76953451,
    SalesDaily: 6,
    SalesMonthly: 43,
    RevenuePerUnit: 72437,
    RevenuePerMonth: 2464357,
    url: 'https://pbs.twimg.com/profile_images/659900833564225536/nIsjLoyp.jpg'
  },
  {
    title: 'R8Audi',
    cid: 3426419,
    desc: 'reated in the world’s toughest development lab: the world of motorsport. We drew on our experiences with motorsport for the development of the Audi R8. For example, the many national and international GT3 titles won by the R8 LMS, including victories at the classic 24-hour races in the Nürburgring, Spa, and Daytona.',
    estSalesDaily: 49,
    estSalesMonthly: 442,
    estRevenuePerUnit: 964733,
    estRevenuePerMonth: 123545675,
    SalesDaily: 7,
    SalesMonthly: 33,
    RevenuePerUnit: 53435,
    RevenuePerMonth: 6456456,
    url: 'http://www.diecastking.com/tub/2007-audi-tt-blue-1-18-diecast-car-model-by-motormax-73177bl.jpg'
  },
];

const generateId = car => {
  return Math.abs((Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 10000000))
}

const generateSalesRevenue = car => {
  car.estSalesDaily = Math.abs(Math.random() > 0.5 ? 1.0 : -1.0 * Math.round(Math.random() * 100));
  car.estSalesMonthly = Math.abs(Math.random() > 0.5 ? 1.0 : -1.0 * Math.round(Math.random() * 1000));
  car.estRevenuePerUnit = Math.abs(Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 1000000);
  car.estRevenuePerMonth = Math.abs(Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 1000000000);
  car.salesDaily = Math.abs(Math.random() > 0.5 ? 1.0 : -1.0 * Math.round(Math.random() * 10));
  car.salesMonthly = Math.abs(Math.random() > 0.5 ? 1.0 : -1.0 * Math.round(Math.random() * 100));
  car.revenuePerUnit = Math.abs(Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100000);
  car.revenuePerMonth = Math.abs(Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100000000);
  return car;
}

const GenerateSalesRevenue = (months, isSales, isFirm) => {
  let salesRevenue = [];
  let factor = 100;
  if (isSales) {
    factor = isFirm ? 10000 : 1000;
  } else {
    factor = isFirm ? 100000000 : 10000;
  }
  for (let i = 0; i < months; i++) {
    salesRevenue.push(Math.abs(Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * factor));
  }
  return salesRevenue;
}
const generateSales = car => {
  let sales = {
    last6MonthSales: GenerateSalesRevenue(6, true, true),
    last6MonthRevenue: GenerateSalesRevenue(6, false, true),
    last12MonthSales: GenerateSalesRevenue(12, true, true),
    last12MonthRevenue: GenerateSalesRevenue(12, false, true),
    myLast6MonthSales: GenerateSalesRevenue(6, true),
    myLast6MonthRevenue: GenerateSalesRevenue(6, false),
    myLast12MonthSales: GenerateSalesRevenue(12, true),
    myLast12MonthRevenue: GenerateSalesRevenue(12, false)
  };
  car.sales = sales;
  return car;
}


class CarsApi {
  static getAllCars() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        cars.forEach(car => { generateSales(car) })
        resolve(Object.assign([], cars));
      }, delay);
    });
  }

  static saveCar(car) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTitleLength = 3;
        if (car.title.length < minTitleLength) {
          reject(`Title must be at least ${minTitleLength} characters.`);
        }

        if (car.desc.length < minTitleLength) {
          reject(`Description must be at least ${minTitleLength} characters.`);
        }

        if (car.cid) {
          const existingCarIndex = cars.findIndex(a => a.id == car.id);
          cars.splice(existingCarIndex, 1, car);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          car.cid = generateId(car);
          cars.push(generateSales(generateSalesRevenue(car)));
        }

        resolve(Object.assign({}, car));
      }, delay);
    });
  }

  static deleteCar(carToDelete) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCarToDelete = cars.findIndex(car => {
          return car.cid == carToDelete.cid;
        });
        let returnCar = cars.splice(indexOfCarToDelete, 1);
        resolve(Object.assign({}, returnCar[0]));
      }, delay);
    });
  }
}

export default CarsApi;
