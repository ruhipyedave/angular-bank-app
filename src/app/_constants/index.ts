export const USER = {
    roles: {
        // admin: 1
        staff: 2,
        customer: 3,
        2: "Staff",
        3: "Customer"
    },
    status: {
        pending: 1, // on signup status is pending
        active: 2, // after email verification status changes to active, only active users an login the application
        deleted: 3, // set status to deleted when user is deleted
        1: "Pending",
        2: "Active",
        3: "Deleted"
    }
}

export const ACCOUNT_TYPES = {
    1: "Saving Account",
    2: "Current Account"
}

export const ACCOUNT_STATUS = {
    1: "Pending",
    2: "Active",
    3: "Inactive",
    4: "Deleted"
}

export const ACCOUNT = {
    type: {
        saving: 1, // deposit account with limited transactions
        current: 2, // for daily transactions
    },
    status: {
        pending: 1, // default status
        active: 2, // on approval of account status changes from pending to active
        inactive: 3, // on reject status changes from pending to inactive
        deleted: 4, // when account is deleted status changes to deleted
    }
}

export const TRANSACTION = {
    type: {
        credit: 1, // withdraw money from bank
        debit: 2 // deposit money in bank
    },
    status: {
        processing: 1, // transaction in progress
        success: 2, // success completed transaction
        failed: 3, // transiction failed
    }
}