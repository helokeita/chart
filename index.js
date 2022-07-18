const bar = document.getElementById('bar').getContext('2d');
const line = document.getElementById('line').getContext('2d');
const doughnut = document.getElementById('doughnut').getContext('2d');
const reda = document.getElementById('reda').getContext('2d');

const barchart = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wendnesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: "値",
            data: [1, 3, 7, 5, 9, 10,4],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                 
                
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
        title: {
            display: true, // タイトルを表示する
            position:'top',
            text: '曜日ごとテンションゲージ' // タイトルのテキスト
        },}
    }
});
//グラフ
const linechar = new Chart(line, {
    type: 'line',
    data: {
        
        labels: ['1月', '２月', '３月', '４月', '５月', '６月', '７月', '８月', '９月', '１０月', '１１月','１２月'],
        datasets: [{
            data: [10, 8, 7, 9, 1, 3, 2, 4, 6, 7, 10, 10],
            label: "値",
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
        title: {
            display: true, // タイトルを表示する
            position:'top',
            text: '月ごとのテンションゲージ' // タイトルのテキスト
        },}
    }
});

const doughnutchart = new Chart(doughnut, {
    type: 'pie',
    data: {
        labels: ['PC','睡眠','生活においての時間','フリータイム'],
        datasets: [{
            data: [40,35,10,15],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
        title: {
            display: true, // タイトルを表示する
            position:'top',
            text: '一日の平均スケジュール' // タイトルのテキスト
        },}
    }
});

const redachart = new Chart(reda, {
    type: 'radar',
    data: {
        labels: ['ユーモア', '度胸', '思いやり', '気の強さ', 'センス'],
        datasets: [{
            data: [4,4,3,4,5],
            label: "値",
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            r:{
                min: 0,
                max: 5,
            },
            y: {
                beginAtZero: true
            },
        },
        plugins: {
        title: {
            display: true, // タイトルを表示する
            position:'top',
            text: '診断情報（サイト情報）' // タイトルのテキスト
        },}
    }
});