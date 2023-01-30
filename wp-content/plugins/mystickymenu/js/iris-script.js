(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    }
    else if(typeof module !== 'undefined' && module.exports) {
        module.exports = factory(require('jquery'));
    }
    else {
        factory(jQuery);
    }
}(function ($, undefined) {
    var priceOptions = {
            "50_websites": {
                "1_year": {
                    "price": 99,
					"per_month":8.5,
                    "link": "https://go.premio.io/?edd_action=add_to_cart&download_id=2199&edd_options[price_id]=28"
                },
                "2_year": {
                    "price": 149,
					"per_month":6.5,
                    "link": "https://go.premio.io/?edd_action=add_to_cart&download_id=2199&edd_options[price_id]=29"
                },
                "lifetime": {
                    "price": 249,
                    "link": "https://go.premio.io/?edd_action=add_to_cart&download_id=2199&edd_options[price_id]=30"
                }
            },
            "500_websites": {
                "1_year": {
                    "price": 179,
					"per_month":15,
                    "link": "https://go.premio.io/?edd_action=add_to_cart&download_id=2199&edd_options[price_id]=31"
                },
                "2_year": {
                    "price": 269,
					"per_month":11.5,
                    "link": "https://go.premio.io/?edd_action=add_to_cart&download_id=2199&edd_options[price_id]=32"
                },
                "lifetime": {
                    "price": 499,
                    "link": "https://go.premio.io/?edd_action=add_to_cart&download_id=2199&edd_options[price_id]=33"
                }
            },
            "1000_websites": {
                "1_year": {
                    "price": 249,
					"per_month":21,
                    "link": "https://go.premio.io/?edd_action=add_to_cart&download_id=2199&edd_options[price_id]=34"
                },
                "2_year": {
                    "price": 375,
					"per_month":16,
                    "link": "https://go.premio.io/?edd_action=add_to_cart&download_id=2199&edd_options[price_id]=35"
                },
                "lifetime": {
                    "price": 619,
                    "link": "https://go.premio.io/?edd_action=add_to_cart&download_id=2199&edd_options[price_id]=36"
                }
            }
        };
    $(document).ready(function($){
        $('.my-color-field').wpColorPicker();
        $(document).on('click', '.sticky-header-upgrade-now', function(e){
            //e.preventDefault();
            //$(".sticky-header-menu ul li a:last").trigger("click");
        });

        $(document).on("click", ".pricing-table-content", function(){
            if(!$(this).hasClass("active")) {
                $(".pricing-table-content").removeClass("active");
                $(this).addClass("active");
                var datFor = $(this).data("option");
                $(".multiple-options").each(function(){
                    $(this).find("option").prop("selected", false);
                    $(this).find("option[data-option='"+datFor+"']").prop("selected", true);
                    $(this).trigger("change");
                })
            }
        });

        if($(".multiple-options").length) {
            $(".multiple-options").select2({
                minimumResultsForSearch: -1
            });
        }
        if($(".multiple-web-options").length) {
            $(".multiple-web-options").select2({
                minimumResultsForSearch: -1
            });
        }
		
		
        $(document).on("change", ".multiple-options", function(){
			
            priceText = $(this).find("option:selected").attr("data-header");
            thisValue = $(this).val();
            thisPrice = $(this).find("option:selected").attr("data-price");
			thisperMonth = $(this).find("option:selected").attr("data-per-month");
			console.log("thisperMonth == " + thisperMonth);
            if(!$(this).hasClass("has-multiple-websites")) {
                $(this).closest(".price-table").find("a.cart-link").attr("href", thisValue);
                $(this).closest(".price-table").find(".plan-price").text("$" + thisPrice);
            } else {
                var webOption = $(".multiple-web-options").val();
                var priceSettings = priceOptions[webOption];
                var yearPlan = $(".multiple-options.has-multiple-websites option:selected").attr("data-option");
               
			   if(priceSettings[yearPlan] != undefined) {
                    priceSettings = priceSettings[yearPlan];
                    thisValue = priceSettings.link;
                    thisPrice = priceSettings.price;
					thisperMonth = priceSettings.per_month;
                }
            }
            thisOption = $(this).find("option:selected").attr("data-option");
            if(thisOption == "1_year") {
                thisPrice = thisPrice+"<span>/year</span>";
				per_month = "Less than <b>$" + thisperMonth + "</b>/mo · <b>Billed Annually</b>";
                priceText = "Renewals for <b>25% off</b>";
            } else if(thisOption == "2_year") {
                thisPrice = thisPrice+"<span>/2 years</span>";
				per_month = "Less than <b>$" + thisperMonth + "</b>/mo · <b>Billed Annually</b>";
                priceText = "Renewals for <b>25% off</b>";
            } else {
                thisPrice = thisPrice+"<span>/lifetime</span>";
				per_month = "<b>Best value</b>";
                priceText = "For lifetime";
            }
			
            $(this).closest(".price-table").find("a.cart-link").attr("href", thisValue);
            $(this).closest(".price-table").find(".plan-price").html("$" + thisPrice);
            $(this).closest(".price-table").find(".price-offer").html(priceText);
            $(this).closest(".price-table").find(".price-permonth").html(per_month);
			
			if ( per_month == '' ) {
				$(this).closest(".price-table").find(".price-permonth").hide();
			} else {
				$(this).closest(".price-table").find(".price-permonth").show();
			}
			
        });

        $(document).on("change", ".multiple-web-options", function(){
            $(".multiple-options.has-multiple-websites").trigger("change");
        });

        if($(".multiple-options.has-multiple-websites").length) {
            $(".multiple-options.has-multiple-websites").trigger("change");
        }
        checkForPricingPos();
        $(window).on("scroll", function(){
            checkForPricingPos();
        });

        $(window).on("resize", function(){
            checkForPricingPos();
        });

        function checkForPricingPos() {
            $(".bottom-position").each(function(){
                if( $(this).offset().top - $(window).scrollTop() - $(window).height() < -3) {
                    $(this).closest(".price-table").removeClass("is-fixed");
                    $(this).closest(".price-table").find(".price-table-bottom").prop("style", "");
                } else {
                    $(this).closest(".price-table").addClass("is-fixed");
                    $(this).closest(".price-table").find(".price-table-bottom").css("top", ($(window).height() - 125 )+"px");
                    $(this).closest(".price-table").find(".price-table-bottom").css("left", $(this).offset().left+"px");
                    $(this).closest(".price-table").find(".price-table-bottom").outerWidth($(this).closest(".price-table").width());
                }
            });
        }
    });
}));