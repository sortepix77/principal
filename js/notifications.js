const notifications = [
	{
		head: 'BUG NA CASA',
		text: 'Aproveite o NOVO BUG no Fortune Tiger - Lucre Rápido',
		img: './assets/tiger/notifications/01.png',
	},
	{
		head: 'MEGA GANHO',
		text: 'ATENÇÃO! Sinal de R$120 reais encontrado no Tiger - CLIQUE AQUI',
		img: './assets/tiger/notifications/02.png',
	},
	{
		head: 'SINAL ENCONTRADO',
		text: 'Aproveite o sinal assertivo de R$200 reais no Fortune Tiger - AGORA!',
		img: './assets/tiger/notifications/03.png',
	},
	{
		head: 'SUPER MEGA GANHO',
		text: 'Lucre com o NOVO BUG no Fortune Tiger AGORA - CLIQUE AQUI',
		img: './assets/tiger/notifications/03.png',
	},
];

const notifyCard = document.querySelector('.notify-card');
const notifyDiv = document.querySelector('.notify');

// Notificar a cada 6 horas
setInterval(notifyMe, 21600000);
showNotifyCard();

function showNotifyCard() {
	if (
		Notification.permission === 'granted' ||
		Notification.permission === 'denied'
	) {
		closeNotify();
	} else {
		setInterval(() => {
			notifyDiv.style.left = '15px';
			notifyCard.style.top = '20px';
		}, 10000);
	}
}

function closeNotify() {
	notifyDiv.style.left = '-100px';
	notifyCard.style.top = '-500px';
	setInterval(() => {
		notifyDiv.style.display = 'none';
		notifyCard.style.display = 'none';
	}, 1000);
	openModalVerify = false;
}

function notifyMe() {
	const numeroAleatorio = Math.floor(Math.random() * 3) + 1;

	if (!('Notification' in window)) {
		// Check if the browser supports notifications
	} else if (Notification.permission === 'granted') {
		// Check whether notification permissions have already been granted, if so, create a notification;
		const notification = new Notification(notifications[numeroAleatorio].head, {
			body: notifications[numeroAleatorio].text,
			icon: notifications[numeroAleatorio].img,
		});
	} else if (Notification.permission !== 'denied') {
		// We need to ask the user for permission
		Notification.requestPermission().then((permission) => {
			// If the user accepts, let's create a notification
			if (permission === 'granted') {
				const notification = new Notification(
					notifications[numeroAleatorio].head,
					{
						body: notifications[numeroAleatorio].text,
						icon: notifications[numeroAleatorio].img,
					},
				);
			}
		});
	}
	showNotifyCard();
}
