> estimate status pending | approved | declined

> invoice status active | paid

> estimate, invoice stage> draft, issued, partial, overdue (how will this come)

>

Need to know the estimate, invoice life cycle flow

1. can one estimate generate multiple invoice

---

1. estimate status update api
2. email opened api
3. sign api
4. estimate sendmail
5. invoice send mail
6. invoice payment api (by client through stripe)
7. invoice payment by kalsayegh manual payment
8. refund api

---

Lisan fix:

```ts
need form backend:

Create Estimate API Body:
-Group Items into Sections Toggle
-
-Contract {
  title: "",
  Description: "",
  }
-Delete Contract

must need to have estimate/invoice type (table, description, imagePdf )
//While creating estimate/invoice there ware 2 category now need 3rd Image/PDF category

Create Invoice : Same things need as Estimate


get estimate Details API:
-contract description
-clint Signature //store
-My Signature //store

"items": [
    {
      "id": "69d87eb901d75586feffc495",
      "quantity": 3,
      "subTotal": 450,
  "images":[//need this list upto 4 image can be uploaded]
    }
  ],


also need those fields in get Estimate/invoice api

Edit and Delete invoice API
get estimates [list], get invoice [list] edit status in both

```
