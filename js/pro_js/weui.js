/**
 * weui.js
 */
var weui = {
	alert : function(msg, title, callback) {
		title = title ? title : "提示信息";
		var alertHtml = '<div class="weui_dialog_alert" style="display: none;">';
		alertHtml += '<div class="weui_mask"></div>';
		alertHtml += '<div class="weui_dialog">';
		alertHtml += '    <div class="weui_dialog_hd"><strong class="weui_dialog_title">'
				+ title + '</strong></div>';
		alertHtml += '    <div class="weui_dialog_bd"></div>';
		alertHtml += '    <div class="weui_dialog_ft">';
		alertHtml += '      <a href="javascript:;" class="weui_btn_dialog primary">确定</a>';
		alertHtml += '  </div>';
		alertHtml += ' </div>';
		alertHtml += '</div>';
		if ($(".weui_dialog_alert").length > 0) {
			$(".weui_dialog_alert .weui_dialog_bd").empty();
		} else {
			$("body").append($(alertHtml));
		}
		var weui_alert = $(".weui_dialog_alert");
		weui_alert.show();
		weui_alert.find(".weui_dialog_bd").html(msg);
		weui_alert.find('.weui_btn_dialog').off("click").on('click',
				function() {
					weui_alert.hide();
					if (callback) {
						callback();
					}
				});
	},
	confirm : function(msg, title, callback) {
		var confirmHtml = '<div class="weui_dialog_confirm">'
				+ '<div class="weui_mask"></div>'
				+ '<div class="weui_dialog">'
				+ '<div class="weui_dialog_hd"><strong class="weui_dialog_title"></strong></div>'
				+ '<div class="weui_dialog_bd"></div>'
				+ '<div class="weui_dialog_ft">'
				+ '<a href="javascript:;" class="weui_btn_dialog default">取消</a>'
				+ '<a href="javascript:;" class="weui_btn_dialog primary">确定</a>'
				+ '</div>' + '</div>' + '</div>';
		if ($(".weui_dialog_confirm").length > 0) {
			$(".weui_dialog_confirm .weui_dialog_bd").empty();
		} else {
			$("body").append($(confirmHtml));
		}
		var weui_confirm = $(".weui_dialog_confirm");
		weui_confirm.show();
		weui_confirm.find(".weui_dialog_title").text(
				title = (title ? title : "确认提示"));
		weui_confirm.find(".weui_dialog_bd").html(msg);
		weui_confirm.find('.primary').off("click").on('click', function() {
			weui_confirm.hide();
			if (callback) {
				callback(true);
			}
		});
		weui_confirm.find('.default').off("click").on('click', function() {
			weui_confirm.hide();
			if (callback) {
				callback(false);
			}
		});
	},
	destroyFlag : false,
	Loading : {
		show : function(msg) {
			var loadingHtml = '<div  class="weui_loading_toast" style="display: none;">'
					+ '<div class="weui_mask_transparent"></div>'
					+ '<div class="weui_toast">'
					+ '<div class="weui_loading">'
					+ ' <div class="weui_loading_leaf weui_loading_leaf_0"></div>'
					+ ' <div class="weui_loading_leaf weui_loading_leaf_1"></div>'
					+ ' <div class="weui_loading_leaf weui_loading_leaf_2"></div>'
					+ ' <div class="weui_loading_leaf weui_loading_leaf_3"></div>'
					+ ' <div class="weui_loading_leaf weui_loading_leaf_4"></div>'
					+ ' <div class="weui_loading_leaf weui_loading_leaf_5"></div>'
					+ ' <div class="weui_loading_leaf weui_loading_leaf_6"></div>'
					+ ' <div class="weui_loading_leaf weui_loading_leaf_7"></div>'
					+ ' <div class="weui_loading_leaf weui_loading_leaf_8"></div>'
					+ ' <div class="weui_loading_leaf weui_loading_leaf_9"></div>'
					+ ' <div class="weui_loading_leaf weui_loading_leaf_10"></div>'
					+ ' <div class="weui_loading_leaf weui_loading_leaf_11"></div>'
					+ '</div>'
					+ '<p class="weui_toast_content"></p>'
					+ '</div>' + '</div>';
			var text = (msg ? msg : "处理中..");
			if ($(".weui_loading_toast").length > 0) {
				$(".weui_loading_toast .weui_toast_content").empty();
			} else {
				$("body").append($(loadingHtml));
			}
			var weui_loading = $(".weui_loading_toast");
			weui_loading.find(".weui_toast_content").text(text).end().show();
			var width = weui_loading.find(".weui_toast").width();
			var w = $(document).width();
			weui_loading.find(".weui_toast").css("left", (w - width) / 2);
		},
		hide : function() {
			if (!weui.destroyFlag)
				$(".weui_loading_toast").hide();
		},
		msg : function(msg, time, cls, icon) {
			var successHtml = '<div class="' + cls
					+ '" style="display: none;">'
					+ '<div class="weui_mask_transparent"></div>'
					+ '<div class="weui_toast">' + '<i class="' + icon
					+ '"></i>' + '<p class="weui_toast_content"></p>'
					+ '</div>' + '</div>';
			if ($("." + cls).length < 1) {
				$("body").append($(successHtml));
				$(".weui_mask_transparent").off("click").on("click",
						function() {
							$("." + cls).hide();
						})
			}
			var t = 3000;
			if (time) {
				t = time;
			}
			var weui_success = $("." + cls).find(".weui_toast_content").text(
					msg).end();
			weui_success.show();
			var width = weui_success.find(".weui_toast").width();
			var w = $(document).width();
			weui_success.find(".weui_toast").css("left", (w - width) / 2 - 5);
			setTimeout(function() {
				weui_success.hide();
			}, t);
		},
		success : function(time) {
			this.msg("操作成功", time, "weui_success_toast", "weui_icon_toast");
		},
		info : function(msg, time) {
			this.msg(msg, time, "weui_info_toast", "weui_icon_info");
		},
		error : function(msg, time) {
			this.msg(msg, time, "weui_error_toast", "weui_icon_warn");
		}
	},
	destroy : function() {
		$(
				".weui_dialog_alert,.weui_dialog_confirm,.weui_loading_toast,.weui_success_toast,.weui_info_toast,.weui_error_toast")
				.remove();
		weui.destroyFlag = true;
	}
};