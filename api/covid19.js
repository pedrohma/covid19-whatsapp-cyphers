var axios = require('axios');

async function get_global_covid19_updated_data(){
    const response = await axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats');
    return response.data;
}

async function get_countries_covid19_updated_data(){
    const response = await axios.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search');
    return response.data;
}

module.exports.get_global_covid19_updated_data = get_global_covid19_updated_data;
module.exports.get_countries_covid19_updated_data = get_countries_covid19_updated_data;