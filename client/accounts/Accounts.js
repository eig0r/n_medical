var myLogoutFunc = function() {
	Session.set('nav-toggle', '');
	FlowRouter.go('/');
}

AccountsTemplates.configure({
	confirmPassword: false,
	termsUrl: 'terms-of-use',
	privacyUrl: 'privacy',
	onLogoutHook: myLogoutFunc
});



AccountsTemplates.addFields([
	{
		_id: 'firstName',
		type: 'text',
		displayName: 'First Name',
		required: true,
    	re: /(?=.*[a-z])(?=.*[A-Z])/,
    	errStr: '1 lowercase and 1 uppercase letter reqiured'
	}, {
		_id: 'profession',
		type: 'select',
		displayName: 'Profession',
		select: [
			{
				text:'Admin',
				value: 'admin'
			}, {
				text: 'Reservation',
				value: 'reservation'
			}, {
				text: 'er_Docotr',
				value: 'er_Docotr'
			}, {
				text: 'Attendant_surgent',
				value: 'Attendant_surgent'
			}, {
				text: 'Surgical_Nurse',
				value: 'Surgical_Nurse'
			}, {
				text: 'lab_tec',
				value: 'lab_tec'
			}
		]
	}

]);
