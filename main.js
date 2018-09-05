class Document{
    constructor(name){
        this.EmployeeName = name;
    }
}

class Employee{
    constructor(name){
        this.name = name;
    }

    work(office){
        for (let i = 1; i<=10; i++){
            office.documents.push(new Document(this.name))
        }
    }
}

class Manager{
    constructor(name){
        this.name = name;
        this.employees = [];
    }

    hireEmployee(name){
        this.employees.push(new Employee(name))
    }

    askEmployeesToWork(office){
        for (let employee of this.employees){
            employee.work(office)
        }
    }
}

class Cleaner{
    constructor(name){
        this.name = name;
    }

    clean(){
        console.log("Clean");
    }
}

class Office{
    constructor(){
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
    }

    hireCleaner(name){
        this.cleaners.push(new Cleaner(name))
    }

    hireManager(name){
        this.managers.push(new Manager(name))
    }

    startWorkDay(){
        for(let cleaner of this.cleaners){
            cleaner.clean();
        }
        for(let manager of this.managers){
            manager.askEmployeesToWork(this)
        }
    }
}