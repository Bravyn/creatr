type Programmer = {
    name: String;
    knownFor: string[];
}

const ian : Programmer = {
    name: "Ian Bravyn Abwoto",
    knownFor: ["Mathematics", "Computing","First AI symbiote"]
};

type C = {
    terminals: number;
    power_rating: number;
}

const usCharger : C = {
    terminals: 8,
    power_rating: 1.2,
}
console.log(ian)
console.log(usCharger)

type Person = {
    name: string;
  };
  
  type Company = {
    name: string;
    manager: Person;
  };

  const manager: Person = {
    name: 'John Doe',
  }
  
  const company: Company = {
    name: 'ACME',
    manager,
  }