import axios from 'axios';

class Api {
    static async getUserInfor(username){
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)

            console.log(response);
        }

        catch(err) {
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfor('camillacorreia');
Api.getUserInfor('diego3g');