// I would like to create a database, where HR-people can look for services that improve the satisfaction of employees ( like yoga, massage, fresh fruits).



//CLASS -> COMPANY
Company = class {
    constructor(name, service, city) {
        console.log("Hi, I am created, my name is", name)
        this.name = name
        this.service = service
        this.city = city
        this.subscribe = []

    }
    greet(customer){
        console.log("Hello " + customer.name + ", my name is " + this.name + ". I offer " + this.service + ". My business is in " + this.city  + ". Do you want to join?")
    }

}


//CLASS -> CUSTOM
Customer = class {
    constructor (name, interest, city) {
        console.log("Hi, I am created, my name is", name)
        this.name = name
        this.interest = interest
        this.city = city
        this.products = []
        this.company = [] 
    }

     search(company){
        console.log("Hello " + company.name + ", my name is " + this.name + ". My interest is " + this.interest + " .I live in " + this.city  + ". Is this a fit?")
    }

    purchase(product) {
        this.product.push(product)
        products.purchase.push(this)

    }

        subscribe(company) {
        this.company.push(company)
        company.subscribe.push(this)
    }

}


//CLASS -> PRODUCT
Products = class {
    constructor(name, price) {
        this.name = name
        this.price = price
        this.purchase = []
    }

    printPurchaseNames () {
        this.purchase.forEach(printName)
    }
    

}


printName = customer => console.log(customer.name + " lives in " + customer.city + "for the price of " + Products.price)


//PRODUCT
yoga = new Products('Yoga Class', 20)
food = new Products ('Salad', 10)



//CUSTOMER
maria = new Customer ('Maria', 'Health', 'Berlin')
frank = new Customer ('Frank', 'Food', 'Munich')



//COMPANY
hellofresh = new Company ('HelloFresh', 'healthy food', 'Berlin', 'food')
yogabarn = new Company ('Yoga Barn', 'yoga classes', 'Munich', 'sports')


maria.purchase(yoga)
maria.purchase(yoga)
maria.purchase(food)
frank.purchase(yoga)

yogabarn.greet(maria)
