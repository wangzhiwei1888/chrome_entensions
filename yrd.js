$(function(){

	$("#btn1").on("click",function(){
		

        $(".bor_calculators_result").show();
        
		 var idic = Calculator.prototype.INTEREST_RATE_DICT;


		var $amount = $('#amount'), amount = $.trim($amount.val()), period = $('#period').val(),
            rate = idic[period];


        var cal_min = new Calculator('jy');
        var plan_min = cal_min.calculate(amount, period, rate,'online');
        var pay_mintotal = 0;
        var pay_maxtotal = 0;

        for(var i=0;i<plan_min.pay_unit.length;i++){

            pay_mintotal +=plan_min.pay_unit[i].total;

        }

        //console.log(pay_mintotal);
        $(".pay_mintotal").html(round(pay_mintotal));


        var cal_max = new Calculator('189');
        var plan_max = cal_max.calculate(amount, period, rate,'online');
        //console.log(plan_max);

        for(var i=0;i<plan_max.pay_unit.length;i++){

            pay_maxtotal +=plan_max.pay_unit[i].total;

        }

        //console.log(pay_maxtotal);
        $(".pay_maxtotal").html(round(pay_maxtotal));


        $('.minPreFee').html(round(plan_min.preFee));
        $('.maxPreFee').html(round(plan_max.preFee));

        $('.min_month_pay_total').html(round(plan_min.month_pay_total));
        $('.max_month_pay_total').html(round(plan_max.month_pay_total));

        $(".pro_rata_fare").html(round(plan_max.mfare));

        var plan_view = {
            contractAmount : plan_min.contractAmount + "~" + plan_max.contractAmount, //合同金额
            pro_rata_fare : plan_max.mfare,//只有信用为一般时才会存在分期服务费
            //preFee : plan_min.preFee + "~" + plan_max.preFee, //前期服务费
            minPreFee : plan_min.preFee,
            maxPreFee : plan_max.preFee,
            //month_pay_total : plan_min.month_pay_total + "~" + plan_max.month_pay_total //月还款额,
            min_month_pay_total : plan_min.month_pay_total,
            max_month_pay_total : plan_max.month_pay_total,
            //totalFee: plan_min.totalFee + "~" + plan_max.totalFee, //借款成本
            minTotal : round(pay_mintotal),
            maxTotal : round(pay_maxtotal)
        };


         

	})
})