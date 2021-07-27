// This function pulls in the webscraped data and displays it to the user
function calculateOffer() {
    d3.json('api/data').then((data) => {

        // Pull out formatted offer and year of dataset
        var qual_offer = data.offer.qual_offer_format
        var data_year = data.offer.year

        // Select html elements where this info will go
        var salary = d3.select('#offer')
        var year = d3.select('#year')

        // Display this information in the html
        salary.text(qual_offer)
        year.text(data_year)

        // Assign salary data to a variable
        var salary_data = data.salary_data

        // Create boxplot to display this data using Plotly
        // https://plotly.com/javascript/box-plots/
        var plot_data = [{
            y: salary_data.map(player => player.Salary),
            boxpoints: 'all',
            jitter: 0.3,
            pointpos: -1.8,
            type: 'box',
            name: 'Player Salaries'
        }];

        var layout = {
            title: `Top 125 Player Salaries in ${data_year}`
        };

        Plotly.newPlot('plot', plot_data, layout);
    })
};

// Calculate offer on webpage initialization
calculateOffer()