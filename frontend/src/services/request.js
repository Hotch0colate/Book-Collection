import axios from "axios";

export async function getNumberBookInSeries() {
    const response = await axios.get(
        "http://localhost:3000/book/how-many-series", { crossdomain: true }
    );
    return response.data;
}

export async function sendRegister(formData) {
    const response = await axios.post(
        "http://localhost:3000/access/sign-up",
        formData
    );
    console.log("User created:", response.data);
    return true;
}

export async function sendLogin(formData) {
    try {
        const response = await axios.post(
            "http://localhost:3000/access/sign-in",
            formData
        );
        return response;
    } catch (err) {
        return err.response;
    }
}

export async function getAllSeries() {
    const accessToken = localStorage.getItem("accessToken");
    const config = {
        headers: {
            authorization: accessToken,
        },
    };
    try {
        var response = await axios.get(
            "http://localhost:3000/book/all-series",
            config
        );
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export async function getAllBookInSeries(series) {
    const accessToken = localStorage.getItem("accessToken");

    const config = {
        headers: {
            authorization: accessToken,
        },
        params: {
            book_series: series,
        },
    };

    const response = await axios.get(
        "http://localhost:3000/book/book-series",
        config
    );
    return response.data;
}

export async function getBookInCollectionSeries() {
    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");

    const config = {
        headers: {
            authorization: accessToken,
        },
        params: {
            id: userId,
        },
    };

    const response = await axios.get(
        "http://localhost:3000/users/all-collection-series",
        config
    );
    console.log(response.data);
    return response.data;
}

export async function getListBookVolInSeriesByUserId(book_series) {
    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");

    const config = {
        headers: {
            authorization: accessToken,
        },
        params: {
            id: userId,
            book_series: book_series,
        },
    };
    const response = await axios.get(
        "http://localhost:3000/users/all-book-vol-collection-series",
        config
    );
    return response.data;
}

export async function updateBookByUserId(book_series, book_vol) {
    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");

    const config = {
        headers: {
            authorization: accessToken,
        },
        params: {
            id: userId,
            book_series: book_series,
            book_vol: book_vol,
        },
    };

    const response = await axios.post(
        "http://localhost:3000/users/updatebook",
        null,
        config
    );
    return response.data;
}

export async function sendRequest(formData) {
    const accessToken = localStorage.getItem("accessToken");

    const config = {
        headers: {
            authorization: accessToken,
        },
    };

    const response = await axios.post(
        "http://localhost:3000/request/create-request",
        formData,
        config
    );
    console.log("Send succesfully:", response.data);
    return true;
}

export async function signOutRequest() {
    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");

    const config = {
        headers: {
            authorization: accessToken,
        },
        params: {
            token: accessToken,
            userId: userId,
        },
    };

    const response = await axios.post(
        "http://localhost:3000/access/sign-out",
        null,
        config
    );
    if (response.status === 200) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userId");
    }
    return response.data;
}

// export async function checkTokenExpire() {
//     const accessToken = localStorage.getItem("accessToken");

//     const config = {
//         params: {
//             token: accessToken,
//         },
//     };
//     console.log(accessToken);
//     const response = await axios.get(
//         "http://localhost:3000/users/check-token-expire",
//         config
//     );
//     console.log(response.data);
//     return response.data;
// }

export async function getAllRequest() {
    const accessToken = localStorage.getItem("accessToken");
    const config = {
        headers: {
            authorization: accessToken,
        },
    };
    try {
        var response = await axios.get(
            "http://localhost:3000/request/all-request",
            config
        );
        return response.data;
    } catch (err) {
        console.log(err);
    }
}