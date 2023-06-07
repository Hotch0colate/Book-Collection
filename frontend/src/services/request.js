import axios from "axios";

export async function getNumberBookInSeries() {
    const response = await axios.get(
        "http://localhost:3000/book/how-many-series", { crossdomain: true }
    );
    return response.data;
}

export async function sendRegister(formData) {
    try {
        const response = await axios.post(
            "http://localhost:3000/access/sign-up",
            formData
        );
        return response;
    } catch (err) {
        return err.response;
    }
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

    try {
        const response = await axios.post(
            "http://localhost:3000/request/create-request",
            formData,
            config
        );
        return response;
    } catch (err) {
        return err.response;
    }
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
        localStorage.removeItem("admin")
    }
    return response.data;
}

export async function checkTokenExpire() {
    const accessToken = localStorage.getItem("accessToken");

    const config = {
        params: {
            token: accessToken,
        },
    };
    // console.log(accessToken);
    const response = await axios.get(
        "http://localhost:3000/users/check-token-expire",
        config
    );
    return response.data;
}

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

export async function deleteRequest(url_ref, request_description) {
    const accessToken = localStorage.getItem("accessToken");
    const config = {
        headers: {
            authorization: accessToken,
        },
        params: {
            url_ref: url_ref,
            request_description: request_description
        }
    };
    try {
        var response = await axios.delete(
            "http://localhost:3000/request/delete-request",
            config
        );
        return response;
    } catch (err) {
        return err.response;
    }
}

export async function createBook(formData) {
    const accessToken = localStorage.getItem("accessToken");
    const config = {
        headers: {
            authorization: accessToken,
        },
    };
    console.log(formData);
    try {
        var response = await axios.post(
            "http://localhost:3000/book/admin/create",
            formData,
            config
        );
        return response;
    } catch (err) {
        return err.response;
    }
}

// /admin/delete
export async function deleteBook(book_series) {
    const accessToken = localStorage.getItem("accessToken");
    const config = {
        headers: {
            authorization: accessToken,
        },
        params: {
            book_series: book_series,
        }
    };
    try {
        var response = await axios.delete(
            "http://localhost:3000/book/admin/delete",
            config
        );
        return response;
    } catch (err) {
        return err.response;
    }
}