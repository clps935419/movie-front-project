import axios from '@/utils/axios.js';

export const getSessionInfo = (props) => {
    return axios({
        url: `/sessions/${props.id}`,
        method: 'get',
    });
}
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

export const checkSeats = (props) => {
    console.log('qq:', props.body)
    return axios({
        url: `/sessions/${props.sessionId}/seats`,
        method: 'post',
        data: props.body,
    });
};
