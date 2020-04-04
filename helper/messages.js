const covid_api = require('../api/covid19');

async function process_input(msg){
    if(msg.body.includes('local')){
        var country = msg.body.split('+')[1].toUpperCase();
        var res = await covid_api.get_countries_covid19_updated_data();
        var countries = res.data.rows;
        var selected_country = countries.filter(x => x.country_abbreviation == country);
        if(selected_country.length > 0){
            var selected = selected_country[0];
            var messag = 'Here are the latest updates for *' + selected.country  + '* \n\n'; 
            messag += 'Total number of cases -> *' + selected.total_cases + '* \n';
            messag += 'Number of new cases -> *' + selected.new_cases + '* \n';
            messag += 'Total number of deaths -> *' + selected.new_deaths + '* \n';
            msg.reply(messag);
        }
        else{
            msg.reply('No information found to the given country *' + country + '*. Please try again.');
        }
    }
    else{
        switch(msg.body){
            case 'global':
            var response = await covid_api.get_global_covid19_updated_data();
            var message = 'Total number of cases -> *'+ response.data.total_cases + '* \n Total number of recovered cases -> *' + response.data.recovery_cases + '* \n Total number of death cases -> *' + response.data.death_cases + '*';
            msg.reply(message);
            break;
            default:
            msg.reply('Sorry we couldn\'t process your request. Here are few things that you can ask me: - global (for global updates about covid19) \n - local + (your country all in lower case just using 2 characters) (for local updates) ex: local+br');
            break;
        }
    }
}

module.exports.process_input = process_input;