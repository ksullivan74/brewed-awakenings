import { getEmployees } from "./database.js"
import { getProducts } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

const employeeOrders = (employeeParam) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === employeeParam.id) {
            // Increment the number of fulfilled orders
            fulfilledOrders ++
        }
    }
    return fulfilledOrders
    // Return how many orders were fulfilled
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if ( employee.id === parseInt(employeeId)) {

                    const orderCount = employeeOrders(employee)

                    window.alert(` ${employee.name} sold ${orderCount} products `)
                }
            }
        }
    }
)

/*
Using code from the last project as an example, attempt adding a click event listener 
that presents an alert box showing how many products an employee has sold when their name 
is clicked.

1.) import orders from the database
2.) add click event listener to idenify employeeID clicked upon
    a.) store that employeeID in a variable using the deconstruct method
2.) define a function to find the employee for an order
    1.) define a variable array to push matching employees into ()
    1.) iterate through the orders array
    2.) if the the employeeID in orders array === employeeID clicked upon
    3.) push that orders object into the newly defined variable array
3.) define a function to iterate through the new arrya
*/
