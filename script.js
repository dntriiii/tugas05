$(document).ready(function() {
    // Efek Show/Hide untuk Sidebar
    $('.menu-icon').click(function() {
        $('.sidebar').toggle('slow');
     // Toggle hidden class // Efek hide/show dengan sliding pada sidebar
    });

// Klik tombol menu untuk toggle sidebar
$('.menu-icon').click(function() {
    // Toggle class 'hide' pada sidebar
    $('.sidebar').toggleClass('hide');
    // Toggle class 'full' pada main-content
    $('.main-content').toggleClass('full');
    
    // Debugging: Cek apakah kelas berhasil ditambahkan
    console.log("Sidebar class: ", $('.sidebar').attr('class'));
    console.log("Main content class: ", $('.main-content').attr('class'));
});

$('.card, .budget, .charts-container').css({
    opacity: 0,
    position: 'relative',
    top: '100px'
});

$('.card').each(function(index) {
    $(this).delay(index * 200).animate({
        opacity: 1,
        top: '0'
    }, 1000);
});

// After all cards are animated, start budget and charts animation
var totalCards = $('.card').length;
var cardAnimationDuration = totalCards * 200 + 1000; // Total delay + animation time

setTimeout(function() {
    // Animate budget container
    $('.budget').each(function(index) {
        $(this).delay(index * 200).animate({
            opacity: 1,
            top: '0'
        }, 1000);
    });

    // Animate charts container
    $('.charts-container').delay(400).animate({
        opacity: 1,
        top: '0'
    }, 1000);
}, cardAnimationDuration);

// Rest of your existing code...
// Efek Slide Toggle untuk dropdown menu
$('.dropdown').click(function() {
    $(this).find('.dropdown-content').slideToggle('fast');
});
$('.chart, .budget-container').hover(
    function() {
        $(this).fadeTo(300, 0.7);  // Fade out saat hover
    },
    function() {
        $(this).fadeTo(300, 1);  // Fade in saat hover berakhir
    }
);

// AP and AR chart animation



// Efek Slide Toggle untuk dropdown menu
$('.dropdown').click(function() {
    $(this).find('.dropdown-content').slideToggle('fast');
});

// Efek Fade In/Fade Out untuk chart dan budget container

    const sidebar = document.querySelector('.sidebar');
    const toggle = document.querySelector('.toggle');
    const modeToggle = document.querySelector('.mode-toggle');
    const body = document.querySelector('body');
    
    sidebar.classList.add('close')

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('close');
        //return chart-placeholder;
    
    });

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
    });

    // Hover effect untuk membuka sidebar
    sidebar.addEventListener('mouseenter', () => {
        if(sidebar.classList.contains('close')) {
            sidebar.classList.remove('close');
            return chart;
        }
    });

    // Function to animate elements
    function animateElements(selector) {
        $(selector).css({
            opacity: 0,
            transform: 'translateY(200px)' // Pindah posisi vertikal 50px dari bawah
        }).each(function(index) {
            $(this).delay(index * 100).animate({
                opacity: 1,
                transform: 'translateY(0px)' // Kembali ke posisi semula
            }, {
                duration: 800,
                step: function(now, fx) {
                    if (fx.prop === 'transform') {
                        $(this).css('transform', `translateY(${50 - now * 50}px)`);
                    }
                }
            });
        });
    }
    
        // Menutup sidebar ketika mouse meninggalkan area
        sidebar.addEventListener('mouseleave', () => {
            if(!sidebar.classList.contains('close')) {
                sidebar.classList.add('close');

            }
        });
    
    
    // Animating cards and charts
    animateElements('.card');
    animateElements('.chart, .pie-chart');

    // Efek Slide Toggle untuk dropdown menu
    $('.dropdown').on('click', function() {
        $(this).find('.dropdown-content').slideToggle('fast');
    });

    // Hover effects for chart and budget container
    $('.chart, .budget-container').hover(
        function() {
            $(this).fadeTo(300, 0.7);  // Fade out saat hover
        },
        function() {
            $(this).fadeTo(300, 1);  // Fade in saat hover berakhir
        }
    );

    $('.chart, .charts-container').hover(
        function() {
            $(this).fadeTo(300, 0.7);  // Fade out saat hover
        },
        function() {
            $(this).fadeTo(300, 1);  // Fade in saat hover berakhir
        }
    );

    $('.chart, .chart-placeholder').hover(
        function() {
            $(this).css('transform', 'scale(1.1)'); // Zoom saat hover
        },
        function() {
            $(this).css('transform', 'scale(1)'); // Kembali ke ukuran normal
        }
    );


    // Zoom effect on charts
    $('.chart, .pie-chart').hover(
        function() {
            $(this).css('transform', 'scale(1.1)'); // Zoom saat hover
        },
        function() {
            $(this).css('transform', 'scale(1)'); // Kembali ke ukuran normal
        }
    );

    // Animasi sederhana pada logo
    $('.logo-name').hover(function() {
        $(this).animate({ fontSize: '30px' }, 400);
    }, function() {
        $(this).animate({ fontSize: '25px' }, 400);
    });

    // Efek Show/Hide pada profil
    $('.profile-icon').on('click', function() {
        $(this).find('img').toggle(100);  // Gambar akan hilang/muncul saat diklik
    });

    // Function to initialize charts
    function initChart(ctx, type, data, options) {
        return new Chart(ctx, {
            type: type,
            data: data,
            options: options
        });
    }

    // Chart data
    const barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Revenue',
            data: [12000, 19000, 3000, 5000, 20000, 30000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    const pieChartData1 = {
        labels: ['Rent', 'Utilities', 'Salaries', 'Supplies', 'Marketing'],
        datasets: [{
            label: 'Expenses',
            data: [5000, 2000, 15000, 3000, 5000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    const pieChartData2 = {
        labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
        datasets: [{
            label: 'Revenue',
            data: [8000, 12000, 7000, 9000, 5000],
            backgroundColor: [
                'rgba(255, 159, 64, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Chart options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Initialize charts
    initChart(document.getElementById('myBarChart').getContext('2d'), 'bar', barChartData, chartOptions);
    initChart(document.getElementById('myPieChart1').getContext('2d'), 'pie', pieChartData1, { responsive: true });
    initChart(document.getElementById('myPieChart2').getContext('2d'), 'pie', pieChartData2, { responsive: true });
});
