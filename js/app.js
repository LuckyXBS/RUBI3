$(function(){
	$('.faq-wallet-btn').click(function(event) {
		$('.tabs-li-item').removeClass('active');
		$('.more-page-block').removeClass('active');
		$('.faq-page-block').addClass('active');
	});
	$('.history-btn-wallet').click(function(event) {
		$('.tabs-li-item').removeClass('active');
		$('.home-page-block').removeClass('active');
		$('.history-page-block').addClass('active');
	});
        $('.deposit-payment-btn-pb').click(function(event) {
		$('.tabs-li-item').removeClass('active');
		$('.mainwallet-page-block').removeClass('active');
		$('.payment-page-block').removeClass('active');
		$('.deposit-page-block').addClass('active');
	});
	$('.withdraw-payment-btn-pb').click(function(event) {
		$('.tabs-li-item').removeClass('active');
		$('.payment-page-block').removeClass('active');
		$('.mainwallet-page-block').removeClass('active');
		$('.withdraw-page-block').addClass('active');
	});
	$('.mobile-payment-btn-pb').click(function(event) {
		$('.tabs-li-item').removeClass('active');
		$('.payment-page-block').removeClass('active');
		$('.mainwallet-page-block').removeClass('active');
		$('.mobile-page-block').addClass('active');
	});
	$('.main-wallet-btn').click(function(event) {
		$('.tabs-li-item').removeClass('active');
		$('.home-page-block').removeClass('active');
		$('.mainwallet-page-block').addClass('active');
	});
	$('.header-profile').click(function(event) {
		$('.profile-page-block').addClass('active');
		$('.mobile-page-block').removeClass('active');
		$('.mainwallet-page-block').removeClass('active');
		$('.withdraw-page-block').removeClass('active');
		$('.deposit-page-block').removeClass('active');
		$('.home-tab-li').removeClass('active');
		$('.pay-tab-li').removeClass('active');
		$('.bonus-tab-li').removeClass('active');
		$('.home-page-block').removeClass('active');
		$('.history-page-block').removeClass('active');
		$('.payment-page-block').removeClass('active');
		$('.bonus-page-block').removeClass('active');
		$('.more-tab-li').removeClass('active');
		$('.faq-page-block').removeClass('active');
		$('.more-page-block').removeClass('active');
	});
	$('.header-profile-name').click(function(event) {
		$('.profile-page-block').addClass('active');
		$('.mainwallet-page-block').removeClass('active');
		$('.withdraw-page-block').removeClass('active');
		$('.mobile-page-block').removeClass('active');
		$('.deposit-page-block').removeClass('active');
		$('.home-tab-li').removeClass('active');
		$('.pay-tab-li').removeClass('active');
		$('.bonus-tab-li').removeClass('active');
		$('.home-page-block').removeClass('active');
		$('.history-page-block').removeClass('active');
		$('.faq-page-block').removeClass('active');
		$('.payment-page-block').removeClass('active');
		$('.bonus-page-block').removeClass('active');
		$('.more-tab-li').removeClass('active');
		$('.more-page-block').removeClass('active');
	});
	$('.home-tab-li').click(function(event) {
		$('.profile-page-block').removeClass('active');
		$('.withdraw-page-block').removeClass('active');
		$('.mainwallet-page-block').removeClass('active');
		$('.mobile-page-block').removeClass('active');
		$('.deposit-page-block').removeClass('active');
		$('.home-tab-li').addClass('active');
		$('.pay-tab-li').removeClass('active');
		$('.bonus-tab-li').removeClass('active');
		$('.home-page-block').addClass('active');
		$('.history-page-block').removeClass('active');
		$('.payment-page-block').removeClass('active');
		$('.faq-page-block').removeClass('active');
		$('.bonus-page-block').removeClass('active');
		$('.more-tab-li').removeClass('active');
		$('.more-page-block').removeClass('active');
	});
	$('.pay-tab-li').click(function(event) {
		$('.profile-page-block').removeClass('active');
		$('.deposit-page-block').removeClass('active');
		$('.mobile-page-block').removeClass('active');
		$('.withdraw-page-block').removeClass('active');
		$('.faq-page-block').removeClass('active');
		$('.mainwallet-page-block').removeClass('active');
		$('.home-tab-li').removeClass('active');
		$('.pay-tab-li').addClass('active');
		$('.bonus-tab-li').removeClass('active');
		$('.home-page-block').removeClass('active');
		$('.history-page-block').removeClass('active');
		$('.payment-page-block').addClass('active');
		$('.bonus-page-block').removeClass('active');
		$('.more-tab-li').removeClass('active');
		$('.more-page-block').removeClass('active');
	});
	$('.bonus-tab-li').click(function(event) {
		$('.profile-page-block').removeClass('active');
		$('.faq-page-block').removeClass('active');
		$('.mainwallet-page-block').removeClass('active');
		$('.withdraw-page-block').removeClass('active');
		$('.mobile-page-block').removeClass('active');
		$('.deposit-page-block').removeClass('active');
		$('.home-tab-li').removeClass('active');
		$('.pay-tab-li').removeClass('active');
		$('.bonus-tab-li').addClass('active');
		$('.home-page-block').removeClass('active');
		$('.history-page-block').removeClass('active');
		$('.bonus-page-block').addClass('active');
		$('.payment-page-block').removeClass('active');
		$('.more-tab-li').removeClass('active');
		$('.more-page-block').removeClass('active');
	});
	$('.more-tab-li').click(function(event) {
		$('.profile-page-block').removeClass('active');
		$('.mainwallet-page-block').removeClass('active');
		$('.deposit-page-block').removeClass('active');
		$('.faq-page-block').removeClass('active');
		$('.home-tab-li').removeClass('active');
		$('.mobile-page-block').removeClass('active');
		$('.withdraw-page-block').removeClass('active');
		$('.more-tab-li').addClass('active');
		$('.pay-tab-li').removeClass('active');
		$('.bonus-tab-li').removeClass('active');
		$('.home-page-block').removeClass('active');
		$('.history-page-block').removeClass('active');
		$('.bonus-page-block').removeClass('active');
		$('.payment-page-block').removeClass('active');
		$('.more-page-block').addClass('active');
	});
});	

$(function(){
	$('.referals-block-btn-copy').click(function(event) {
		$('.referals-block-btn-copy').addClass('copied');
		$('.referals-block-btn-copy').html('Скопировано!');
	});
});

$(function(){
	$('.referals-block-btn').click(function(event) {
		$('.modal-layout-block').addClass('active');
	});
	$('.ref-card-link').click(function(event) {
		$('.modal-layout-block').addClass('active');
	});
	$('.modal-layout-steps-close').click(function(event) {
		$('.modal-layout-block').removeClass('active');
	});
});	
