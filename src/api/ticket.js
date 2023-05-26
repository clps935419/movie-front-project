import axios from '@/utils/axios.js';

export const getSessionTicketTypes = (props) => {
    return axios({
        url: `/sessions/${props.params.id}/ticketTypes`,
        method: 'get',
    });
}
export const getSessionTicketSeats = (props) => {
    return axios({
        url: `/sessions/${props.params.id}/seats`,
        method: 'get',
    });
}

export const checkSeatsAvailable = (props) => {
    return axios({
        url: `/sessions/${props.params.id}/seats`,
        method: 'post',
        ...props,
    });
};

export const hashBookInfo = (props) => {
    return axios({
        url: `/booking`,
        method: 'post',
        ...props,
    });
};

export const getPayInfo = (props) => {
    return axios({
        url: `/booking/rePay/:orderId`,
        method: 'get',
        ...props,
    });
};
