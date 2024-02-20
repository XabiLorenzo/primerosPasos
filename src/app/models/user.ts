export class User {
    constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public maidenName: string,
      public age: number,
      public gender: string,
      public email: string,
      public phone: string,
      public username: string,
      public password: string,
      public birthDate: string,
      public image: string,
      public bloodGroup: string,
      public height: number,
      public weight: number,
      public eyeColor: string,
      public hair: {
        color: string;
        type: string;
      },
      public domain: string,
      public ip: string,
      public address: {
        address: string;
        city: string;
        coordinates: {
          lat: number;
          lng: number;
        };
        postalCode: string;
        state: string;
      },
      public macAddress: string,
      public university: string,
      public bank: {
        cardExpire: string;
        cardNumber: string;
        cardType: string;
        currency: string;
        iban: string;
      },
      public company: {
        address: {
          address: string;
          city: string;
          coordinates: {
            lat: number;
            lng: number;
          };
          postalCode: string;
          state: string;
        };
        department: string;
        name: string;
        title: string;
      },
      public ein: string,
      public ssn: string,
      public userAgent: string
    ) {}
  }