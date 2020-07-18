// 例如，缩放适配为CONTAIN模式
const view = new ViewAdap();
view.setViewMode({
	designWidth: 1920,
	designHeight: 1080,
	mode: 'contain'
})

// 点击index里面的go
$('.index .go-1').click(function () {
	getcontent('internalmilieu');
	$(this).animate({
		width: '100%',
	}, 'slow')
	setTimeout(function () {
		$('.index').fadeOut(100)
		$('.list .wjj').fadeIn()
		$('.list').fadeIn(200)
		$('.list .leftNav').fadeIn(200)
		$('.list .box').fadeIn(200)
	}, 1000)
})

// 点击listNav
$(document).on('click', '.list .leftNav ul li', function () {
	var index = $(this).index()
	$('.list .leftNav ul li.action').removeClass('action')
	$(this).addClass('action')
	$('.left').hide()
	$('.left').eq(index).show()
	$('.icon1').hide()
	$('.icon1').eq(index).show()
	$('.list .leftNav ul li p').css({ color: 'rgba(255,255,255,.6)' })
	$('.list .leftNav ul li p').eq(index).css({ color: 'rgba(255,255,255,1)' })
	$('.diskContent').hide()
	pageNum = 1
	$('.wjj').fadeIn(100)
	$('.diskShow').fadeOut()
	$('.mbx ul').html('')
	// $('.ygglBottom .bottomNav ul').html('')
	arr1 = []
	Http = []
	$('.diskContent-back.backSearch').removeClass('backSearch')
})

// 点击左侧导航栏显示对应的内容
$('.list .leftNav ul li').eq(0).click(function () {
	$('.list .box .wdhj').fadeIn(100).siblings().fadeOut()
	getcontent('internalmilieu');
	$('.list .yggl ul li').eq(0).addClass('action1').siblings().removeClass('action1')
})
$(document).on('click', '.list .wdhj .ygglNav ul li', function () {
	$('.list .wdhj .ygglNav ul li.action1').removeClass('action1')
	$(this).addClass('action1')
})

$('.list .leftNav ul li').eq(1).click(function () {
	$('.list .box .wdss').fadeIn(100).siblings().fadeOut()
	getwdss('servicefacility');
	$('.list .wdss ul li').eq(0).addClass('action1').siblings().removeClass('action1')
})
$(document).on('click', '.list .wdss .ygglNav ul li', function () {
	$('.list .wdss .ygglNav ul li.action1').removeClass('action1')
	$(this).addClass('action1')
})

$('.list .leftNav ul li').eq(2).click(function () {
	// var bh = $(this).attr('data-bh')
	$('.list .box .fwgn').fadeIn(100).siblings().fadeOut()
	getfwgn('businessFunctions');
	$('.list .fwgn ul li').eq(0).addClass('action1').siblings().removeClass('action1')
	// $('.disk .disk-box ul li').attr('data-bh',bh)
})
$(document).on('click', '.list .fwgn .ygglNav ul li', function () {
	$('.list .fwgn .ygglNav ul li.action1').removeClass('action1')
	$(this).addClass('action1')
})

$('.list .leftNav ul li').eq(3).click(function () {
	$('.list .box .yggl1').fadeIn(100).siblings().fadeOut()
	getyggl('employeeImage');
	$('.list .yggl1 ul li').eq(0).addClass('action1').siblings().removeClass('action1')
})
$(document).on('click', '.list .yggl1 .ygglNav ul li', function () {
	$('.list .yggl1 .ygglNav ul li.action1').removeClass('action1')
	$(this).addClass('action1')
})

$('.list .leftNav ul li').eq(4).click(function () {
	$('.list .box .gwgf').fadeIn(100).siblings().fadeOut()
	getgwgf('jobSpecification');
	$('.list .gwgf ul li').eq(0).addClass('action1').siblings().removeClass('action1')
})
$(document).on('click', '.list .gwgf .ygglNav ul li', function () {
	$('.list .gwgf .ygglNav ul li.action1').removeClass('action1')
	$(this).addClass('action1')
})

$('.list .leftNav ul li').eq(5).click(function () {
	$('.list .box .fwzd').fadeIn(100).siblings().fadeOut()
	getfwzd('systemConstruction');
	$('.list .fwzd ul li').eq(0).addClass('action1').siblings().removeClass('action1')
})
$(document).on('click', '.list .fwzd .ygglNav ul li', function () {
	$('.list .fwzd .ygglNav ul li.action1').removeClass('action1')
	$(this).addClass('action1')
})

$('.list .leftNav ul li').eq(6).click(function () {
	$('.list .box .fwwh').fadeIn(100).siblings().fadeOut()
	getfwwh('serviceCulture');
	$('.list .fwwh ul li').eq(0).addClass('action1').siblings().removeClass('action1')
})
$(document).on('click', '.list .fwwh .ygglNav ul li', function () {
	$('.list .fwwh .ygglNav ul li.action1').removeClass('action1')
	$(this).addClass('action1')
})

$('.list .leftNav ul li').eq(7).click(function () {
	$('.list .box .jyyj').fadeIn(100).siblings().fadeOut()
	getjyyj('operatingResults');
	$('.list .jyyj ul li').eq(0).addClass('action1').siblings().removeClass('action1')
})
$(document).on('click', '.list .jyyj .ygglNav ul li', function () {
	$('.list .jyyj .ygglNav ul li.action1').removeClass('action1')
	$(this).addClass('action1')
})

$('.list .leftNav ul li').eq(8).click(function () {
	$('.list .box .shzr').fadeIn(100).siblings().fadeOut()
	getshzr('publicEducation');
	$('.list .shzr ul li').eq(0).addClass('action1').siblings().removeClass('action1')
})
$(document).on('click', '.list .shzr .ygglNav ul li', function () {
	$('.list .shzr .ygglNav ul li.action1').removeClass('action1')
	$(this).addClass('action1')
})

$('.list .leftNav ul li').eq(9).click(function () {
	$('.list .box .hyhd').fadeIn(100).siblings().fadeOut()
	gethyhd('meeting');
	$('.list .hyhd ul li').eq(0).addClass('action1').siblings().removeClass('action1')
	$('.icon8.icon8-bj').removeClass('icon8-bj')
	$('.icon8').addClass('icon8-bj')
})
$(document).on('click', '.list .hyhd .ygglNav ul li', function () {
	$('.list .hyhd .ygglNav ul li.action1').removeClass('action1')
	$(this).addClass('action1')
})





// 点击历史记录
$(document).on('click', '.bottomNav ul li p', function () {
	var id = $(this).parent().attr('data-id')
	$('.diskContent-content').html('')
	getxq(id, url)
	$('.diskContent').fadeIn(100)
})
$(document).on('click', '.mbx ul li', function () {
	var bh = $(this).attr('data-bh')
	var i = $(this).attr('data-index')
	var id = $(this).attr('data-id')
	var url = Http[i]
	getejwjj1(url, bh)
	getxq(id, url, bh)
	console.log(arr1)
	arr1.forEach(function (item) {
		arr1.splice(i + 1)
	})
	Http.forEach(function (item) {
		Http.splice(i + 1)
	})
	$(this).parent().find('li').each(function (index) {
		if (i < $(this).attr('data-index')) {
			$(this).remove();
		}
	})
})
$(document).on('click', '.diskShow .disk-box ul li', function () {
	var type = $(this).attr('data-type')
	if (type != 0) {
		$('.diskShow').fadeOut()
		// $('.disk .disk-box ul li.liuxu1').removeClass('liuxu1')
		// $('.disk .disk-box ul li').removeClass('liuxu')
	}
})

$(document).on('click', '.yggl .ygglNav ul li', function () {
	$('.wjj').fadeIn(100)
	$('.diskShow').fadeOut()
})


$(document).on('click', '.leftNav>img', function () {
	$('.wjj').fadeOut()
	$('.index').fadeIn(100)
	$('.list .leftNav').fadeOut()
	$('.list .box').fadeOut()
	setTimeout(() => {
		$('.index .go-1').animate({
			width: '120px',
		}, 'slow')
	}, 100)
})


// 点击搜索的清空
$(document).on('click', '.searchIndexContent .header>div', function () {
	$('.searchIndexContent>p').remove()
})

$(document).on('click', '.searchIndexNav .close', function () {
	$('.searchIndex').fadeOut()
	$('.list').fadeIn(100)
	getcontent('internalmilieu');
	$('.hahah').fadeOut()
	$('.list .ygglNav ul li').eq(0).addClass('action1')
	$('.list .leftNav ul li').eq(0).addClass('action')
	$('.list .leftNav ul li').eq(0).find('p').css({ color: '#fff' })
	$('.list .leftNav ul li').eq(0).find('.left').fadeIn()
	$('.list .leftNav ul li').eq(0).find('.icon1').fadeIn()
	$('.wdhj').fadeIn(100)
	$('.wjj').fadeIn(100)
	$('.mbx ul').html('')
	Http = []
	arr1 = []
	$('.diskContent-back.backSearch').removeClass('backSearch')
})


// 點擊搜索
$(document).on('click', '.list .search', function () {
	$('.searchIndex').fadeIn(100)
	$('.list').fadeOut()
	$('.hahah').fadeOut()
	$('.diskContent').fadeOut()
	$('.diskShow').fadeOut()
	$('.ygglNav ul li.action1').removeClass('action1')
	$('.list .leftNav ul li.action').removeClass('action')
	$('.list .leftNav ul li .left').hide()
	$('.list .leftNav ul li .icon1').hide()
	$('.list .leftNav ul li p').css({ color: 'rgba(255,255,255,.6)' })
	$('.yggl').fadeOut()
})

// 搭建数据请求环境
var url = 'http://188.131.235.7:8081/'
let jqPostAjaxPromise = function (param) {
	return new Promise(function (resolve, reject) {
		$.ajax({
			url: url + param.url,
			type: param.type,
			page: param.page,
			limite: param.limite,
			data: param.data || '',
			dataType: "json",
			success: function (data) {
				resolve(data);
				console.log(data)
			},
			error: function (error) {
				reject(error)
			}
		});
	});
};


// 请求网点环境
var pageNum = 1
var pageSize = 16
function getcontent(liuxu) {
	var internalmilieu;
	jqPostAjaxPromise({
		url: "fileEditor/list?pageSize=" + pageSize + "&pageNum=" + pageNum + "&fName=&fParentId=0&fParam=" + liuxu,
		//   fileEditor/list?pageSize=16&pageNum=1&fName=&fParam=externalmilieu&fParentId=0   internalmilieu
		type: "get",
		data: {},
	}).then(res => {
		var data = res.rows
		total = res.total
		var li = ''
		var img = ''
		var fy = ''
		var imgUrl = ['./images/disk.png', './images/excel.png', './images/jpg.png', './images/pdf.png', './images/ppt.png', './images/txt.png', './images/word.png', './images/html.png']
		for (var i in data) {
			var type = data[i].fType
			if (type == 0) {
				li += `<li data-bh="0" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[0]}" alt="" class="diskImg diskImg1">
					<p data-type="${data[i].fType}" title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 1) {
				li += `<li data-bh="0" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[5]}" alt="" class="diskImg">
					<p data-type="${data[i].fType}" title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 2) {
				li += `<li data-bh="0" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p data-type="${data[i].fType}" title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 3) {
				li += `<li data-bh="0" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p data-type="${data[i].fType}" title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 4) {
				li += `<li data-bh="0" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[7]}" alt="" class="diskImg">
					<p data-type="${data[i].fType}" title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 5) {
				li += `<li data-bh="0" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[2]}" alt="" class="diskImg">
					<p data-type="${data[i].fType}" title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 6) {
				li += `<li data-bh="0" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p data-type="${data[i].fType}" title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 7) {
				li += `<li data-bh="0" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 8) {
				li += `<li data-bh="0" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 9) {
				li += `<li data-bh="0" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			}

		}
		$(".wdhj .wjj #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
		});
		$(".wdhj .diskShow #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
		});
		$('.wdhj .wjj .disk-box ul').html(li)

	}).catch(err => {
		console.log(err)
	})
}
getcontent('internalmilieu');

// 点击网点环境里面的li
$('.wdhj .ygglNav ul li').eq(0).click(function () {
	getcontent('internalmilieu');
})

$('.wdhj .ygglNav ul li').eq(1).click(function () {
	getcontent('externalmilieu');
})
$(document).on('click', '.wdhj .wjj #next', function () {
	pageNum++
	console.log(pageNum)

	getcontent('internalmilieu')
})

$(document).on('click', '.wdhj .wjj #prev', function () {
	pageNum--
	if (pageNum <= 0) {
		pageNum = 1
	}
	getcontent('internalmilieu')
})
$(document).on('click', '.wdhj .wjj .pg-showpage', function () {
	var val = $(this).text()
	pageNum = val
	getcontent('internalmilieu');
})




// 请求网点设施
// 请求网点设施
function getwdss(servicefacility) {
	jqPostAjaxPromise({
		url: "fileEditor/list?pageSize=" + pageSize + "&pageNum=" + pageNum + "&fName=&fParentId=0&fParam=" + servicefacility,
		// list?pageSize=16&pageNum=1&fName=&fParam=infopromotion&fParentId=0&_=1561443456218
		// milieusafe
		type: "get",
		data: {}
	}).then(res => {
		var data = res.rows
		total = res.total
		var li = ''
		var imgUrl = ['./images/disk.png', './images/excel.png', './images/jpg.png', './images/pdf.png', './images/ppt.png', './images/txt.png', './images/word.png', './images/html.png']
		for (var i in data) {
			var type = data[i].fType
			if (type == 0) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[0]}" alt="" class="diskImg diskImg1">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 1) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[5]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 2) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 3) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 4) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[7]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 5) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[2]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 6) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 7) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 8) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 9) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			}
		}
		$('.wdss .wjj .disk-box ul').html(li)
		$(".wdss .wjj #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_cur_count: pageNum,
			pg_total_count: total,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
			pg_call_fun: function (count) {
			}
		});
		$(".wdss .diskShow #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
		});
	}).catch(err => {
		console.log(err)
	})
}
getwdss('servicefacility');

$(document).on('click', '.wdss #next', function () {
	pageNum++
	getwdss('servicefacility')
})

$(document).on('click', '.wdss #prev', function () {
	pageNum--
	if (pageNum <= 0) {
		pageNum = 1
	}
	getwdss('servicefacility')
})
$(document).on('click', '.wdss .pg-showpage', function () {
	var val = $(this).text()
	pageNum = val
	getwdss('servicefacility');
})

// 点击网点设施里面的li
$('.wdss .ygglNav ul li').eq(0).click(function () {
	getwdss('servicefacility');
})
$('.wdss .ygglNav ul li').eq(1).click(function () {
	getwdss('infopromotion');
})
$('.wdss .ygglNav ul li').eq(2).click(function () {
	getwdss('milieusafe');
})



// 请求服务功能
function getfwgn(businessFunctions) {
	jqPostAjaxPromise({
		url: "fileEditor/list?pageSize=" + pageSize + "&pageNum=" + pageNum + "&fName=&fParentId=0&fParam=" + businessFunctions,
		type: "get",
		data: {}
	}).then(res => {
		var data = res.rows
		total = res.total
		var li = ''
		var imgUrl = ['./images/disk.png', './images/excel.png', './images/jpg.png', './images/pdf.png', './images/ppt.png', './images/txt.png', './images/word.png', './images/html.png']
		for (var i in data) {
			var type = data[i].fType
			if (type == 0) {
				li += `<li data-bh="2" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[0]}" alt="" class="diskImg diskImg1">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 1) {
				li += `<li data-bh="2" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[5]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 2) {
				li += `<li data-bh="2" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 3) {
				li += `<li data-bh="2" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 4) {
				li += `<li data-bh="2" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[7]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 5) {
				li += `<li data-bh="2" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[2]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 6) {
				li += `<li data-bh="2" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 7) {
				li += `<li data-bh="2" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 8) {
				li += `<li data-bh="2" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 9) {
				li += `<li data-bh="2" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			}
		}
		$('.fwgn .wjj .disk-box ul').html(li)
		$(".fwgn .wjj #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
			pg_call_fun: function (count) {

			}
		});
		$(".fwgn .diskShow #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
		});
	}).catch(err => {
		console.log(err)
	})
}
getfwgn('businessFunctions');

$(document).on('click', '.fwgn #next', function () {
	pageNum++
	getfwgn('businessFunctions');
})

$(document).on('click', '.fwgn #prev', function () {
	pageNum--
	if (pageNum <= 0) {
		pageNum = 1
	}
	getfwgn('businessFunctions');
})
$(document).on('click', '.fwgn .pg-showpage', function () {
	var val = $(this).text()
	pageNum = val
	getfwgn('businessFunctions');
})

// 点击网点设施里面的li
$('.fwgn .ygglNav ul li').eq(0).click(function () {
	getfwgn('businessFunctions');
})
$('.fwgn .ygglNav ul li').eq(1).click(function () {
	getfwgn('serviceProcess');
})
$('.fwgn .ygglNav ul li').eq(2).click(function () {
	getfwgn('specialGroups');
})



// 请求员工管理
function getyggl(employeeImage) {
	jqPostAjaxPromise({
		url: "fileEditor/list?pageSize=" + pageSize + "&pageNum=" + pageNum + "&fName=&fParentId=0&fParam=" + employeeImage,
		type: "get",
		data: {}
	}).then(res => {
		var data = res.rows
		total = res.total
		var li = ''
		var imgUrl = ['./images/disk.png', './images/excel.png', './images/jpg.png', './images/pdf.png', './images/ppt.png', './images/txt.png', './images/word.png', './images/html.png']
		for (var i in data) {
			var type = data[i].fType
			if (type == 0) {
				li += `<li data-bh="3" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[0]}" alt="" class="diskImg diskImg1">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 1) {
				li += `<li data-bh="3" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[5]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 2) {
				li += `<li data-bh="3" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 3) {
				li += `<li data-bh="3" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 4) {
				li += `<li data-bh="3" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[7]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 5) {
				li += `<li data-bh="3" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[2]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 6) {
				li += `<li data-bh="3" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 7) {
				li += `<li data-bh="3" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 8) {
				li += `<li data-bh="3" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 9) {
				li += `<li data-bh="3" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			}
		}
		$('.yggl1 .wjj .disk-box ul').html(li)
		$(".yggl1 .wjj #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_cur_count: pageNum,
			pg_total_count: total,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
			pg_call_fun: function (count) {
			}
		});
		$(".yggl1 .diskShow #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
		});
	}).catch(err => {
		console.log(err)
	})
}
getyggl('employeeImage');

$(document).on('click', '.yggl1 #next', function () {
	pageNum++
	console.log('員工管理')
	getyggl('employeeImage');
})

$(document).on('click', '.yggl1 #prev', function () {
	pageNum--
	if (pageNum <= 0) {
		pageNum = 1
	}
	getyggl('employeeImage');
})
$(document).on('click', '.yggl1 .pg-showpage', function () {
	var val = $(this).text()
	pageNum = val
	getyggl('employeeImage');
})

// 点击网点设施里面的li
$('.yggl1 .ygglNav ul li').eq(0).click(function () {
	getyggl('employeeImage');
})
$('.yggl1 .ygglNav ul li').eq(1).click(function () {
	getyggl('codeOfConduct');
})
$('.yggl1 .ygglNav ul li').eq(2).click(function () {
	getyggl('staffAssignments');
})
$('.yggl1 .ygglNav ul li').eq(3).click(function () {
	getyggl('jobSkills&fParentId');
})
$('.yggl1 .ygglNav ul li').eq(4).click(function () {
	getyggl('employeeTraining');
})
$('.yggl1 .ygglNav ul li').eq(5).click(function () {
	getyggl('personnelManagement');
})




// 岗位规范
function getgwgf(jobSpecification) {
	jqPostAjaxPromise({
		url: "fileEditor/list?pageSize=" + pageSize + "&pageNum=" + pageNum + "&fName=&fParentId=0&fParam=" + jobSpecification,
		type: "get",
		data: {}
	}).then(res => {
		var data = res.rows
		total = res.total
		var li = ''
		var imgUrl = ['./images/disk.png', './images/excel.png', './images/jpg.png', './images/pdf.png', './images/ppt.png', './images/txt.png', './images/word.png', './images/html.png']
		for (var i in data) {
			var type = data[i].fType
			if (type == 0) {
				li += `<li data-bh="4" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[0]}" alt="" class="diskImg diskImg1">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 1) {
				li += `<li data-bh="4" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[5]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 2) {
				li += `<li data-bh="4" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 3) {
				li += `<li data-bh="4" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 4) {
				li += `<li data-bh="4" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[7]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 5) {
				li += `<li data-bh="4" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[2]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 6) {
				li += `<li data-bh="4" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 7) {
				li += `<li data-bh="4" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 8) {
				li += `<li data-bh="4" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 9) {
				li += `<li data-bh="4" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			}
		}
		$('.gwgf .wjj .disk-box ul').html(li)
		$(".gwgf .wjj #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
			pg_call_fun: function (count) {
			}
		});
		$(".gwgf .diskShow #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
		});
	}).catch(err => {
		console.log(err)
	})
}
getgwgf('jobSpecification');

$(document).on('click', '.gwgf #next', function () {
	pageNum++
	getgwgf('jobSpecification');
})

$(document).on('click', '.gwgf #prev', function () {
	pageNum--
	if (pageNum <= 0) {
		pageNum = 1
	}
	getgwgf('jobSpecification');
})
$(document).on('click', '.gwgf .pg-showpage', function () {
	var val = $(this).text()
	pageNum = val
	getgwgf('jobSpecification');
})


// 点击网点设施里面的li
$('.gwgf .ygglNav ul li').eq(0).click(function () {
	getgwgf('jobSpecification');
})



// 服务制度
function getfwzd(systemConstruction) {
	jqPostAjaxPromise({
		url: "fileEditor/list?pageSize=" + pageSize + "&pageNum=" + pageNum + "&fName=&fParentId=0&fParam=" + systemConstruction,
		type: "get",
		data: {}
	}).then(res => {
		var data = res.rows
		total = res.total
		var li = ''
		var imgUrl = ['./images/disk.png', './images/excel.png', './images/jpg.png', './images/pdf.png', './images/ppt.png', './images/txt.png', './images/word.png', './images/html.png']
		for (var i in data) {
			var type = data[i].fType
			if (type == 0) {
				li += `<li data-bh="5" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[0]}" alt="" class="diskImg diskImg1">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 1) {
				li += `<li data-bh="5" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[5]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 2) {
				li += `<li data-bh="5" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 3) {
				li += `<li data-bh="5" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 4) {
				li += `<li data-bh="5" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[7]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 5) {
				li += `<li data-bh="5" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[2]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 6) {
				li += `<li data-bh="5" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 7) {
				li += `<li data-bh="5" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 8) {
				li += `<li data-bh="5" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 9) {
				li += `<li data-bh="5" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			}
		}
		$('.fwzd .wjj .disk-box ul').html(li)
		$(".fwzd .wjj #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
			pg_call_fun: function (count) {
			}
		});
		$(".fwzd .diskShow #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
		});
	}).catch(err => {
		console.log(err)
	})
}
getfwzd('jobSpecification');

$(document).on('click', '.fwzd #next', function () {
	pageNum++
	getfwzd('systemConstruction');
})

$(document).on('click', '.fwzd #prev', function () {
	pageNum--
	if (pageNum <= 0) {
		pageNum = 1
	}
	getfwzd('systemConstruction');
})
$(document).on('click', '.fwzd .pg-showpage', function () {
	var val = $(this).text()
	pageNum = val
	getfwzd('systemConstruction');
})

// 点击网点设施里面的li
$('.fwzd .ygglNav ul li').eq(0).click(function () {
	getfwzd('systemConstruction');
})
$('.fwzd .ygglNav ul li').eq(1).click(function () {
	getfwzd('institutionalExecution');
})


// 服务文化
function getfwwh(serviceCulture) {
	jqPostAjaxPromise({
		url: "fileEditor/list?pageSize=" + pageSize + "&pageNum=" + pageNum + "&fName=&fParentId=0&fParam=" + serviceCulture,
		type: "get",
		data: {}
	}).then(res => {
		var data = res.rows
		total = res.total
		var li = ''
		console.log(data)

		var imgUrl = ['./images/disk.png', './images/excel.png', './images/jpg.png', './images/pdf.png', './images/ppt.png', './images/txt.png', './images/word.png', './images/html.png']
		for (var i in data) {
			var type = data[i].fType
			if (type == 0) {
				li += `<li data-bh="6" data-lx="${data[i].fParam}" class="liuxu1 diskImg1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[0]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 1) {
				li += `<li data-bh="6" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[5]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 2) {
				li += `<li data-bh="6" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 3) {
				li += `<li data-bh="6" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 4) {
				li += `<li data-bh="6" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[7]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 5) {
				li += `<li data-bh="6" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[2]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 6) {
				li += `<li data-bh="6" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 7) {
				li += `<li data-bh="6" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 8) {
				li += `<li data-bh="6" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 9) {
				li += `<li data-bh="6" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			}
		}
		$('.fwwh .wjj .disk-box ul').html(li)
		$(".fwwh .wjj #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
			pg_call_fun: function (count) {
			}
		});
		$(".fwwh .diskShow #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
		});
	}).catch(err => {
		console.log(err)
	})
}
getfwwh('serviceCulture');

$(document).on('click', '.fwwh #next', function () {
	pageNum++
	getfwwh('serviceCulture');
})

$(document).on('click', '.fwwh #prev', function () {
	pageNum--
	if (pageNum <= 0) {
		pageNum = 1
	}
	getfwwh('serviceCulture');
})
$(document).on('click', '.fwwh .pg-showpage', function () {
	var val = $(this).text()
	pageNum = val
	getfwwh('serviceCulture');
})

// 点击网点设施里面的li
$('.fwwh .ygglNav ul li').eq(0).click(function () {
	getfwwh('serviceCulture');
})
$('.fwwh .ygglNav ul li').eq(1).click(function () {
	getfwwh('employeeCare');
})



// 经营业绩开始
function getjyyj(operatingResults) {
	jqPostAjaxPromise({
		url: "fileEditor/list?pageSize=" + pageSize + "&pageNum=" + pageNum + "&fName=&fParentId=0&fParam=" + operatingResults,
		type: "get",
		data: {}
	}).then(res => {
		var data = res.rows
		total = res.total
		var li = ''
		var imgUrl = ['./images/disk.png', './images/excel.png', './images/jpg.png', './images/pdf.png', './images/ppt.png', './images/txt.png', './images/word.png', './images/html.png']
		for (var i in data) {
			var type = data[i].fType
			if (type == 0) {
				li += `<li data-bh="7" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[0]}" alt="" class="diskImg diskImg1">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 1) {
				li += `<li data-bh="7" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[5]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 2) {
				li += `<li data-bh="7" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 3) {
				li += `<li data-bh="7" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 4) {
				li += `<li data-bh="7" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[7]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 5) {
				li += `<li data-bh="7" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[2]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 6) {
				li += `<li data-bh="7" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 7) {
				li += `<li data-bh="7" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 8) {
				li += `<li data-bh="7" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 9) {
				li += `<li data-bh="7" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			}
		}
		$('.jyyj .wjj .disk-box ul').html(li)
		$(".jyyj .wjj #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_cur_count: pageNum,
			pg_total_count: total,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
			pg_call_fun: function (count) {
			}
		});
		$(".jyyj .diskShow #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
		});
	}).catch(err => {
		console.log(err)
	})
}
getjyyj('operatingResults');

$(document).on('click', '.jyyj #next', function () {
	pageNum++
	getjyyj('operatingResults');
})

$(document).on('click', '.jyyj #prev', function () {
	pageNum--
	if (pageNum <= 0) {
		pageNum = 1
	}
	getjyyj('operatingResults');
})
$(document).on('click', '.jyyj .pg-showpage', function () {
	var val = $(this).text()
	pageNum = val
	getjyyj('operatingResults');
})

// 点击网点设施里面的li
$('.jyyj .ygglNav ul li').eq(0).click(function () {
	getjyyj('operatingResults');
})



// 社会责任
function getshzr(publicEducation) {
	jqPostAjaxPromise({
		url: "fileEditor/list?pageSize=" + pageSize + "&pageNum=" + pageNum + "&fName=&fParentId=0&fParam=" + publicEducation,
		type: "get",
		data: {}
	}).then(res => {
		var data = res.rows
		total = res.total
		var li = ''
		var imgUrl = ['./images/disk.png', './images/excel.png', './images/jpg.png', './images/pdf.png', './images/ppt.png', './images/txt.png', './images/word.png', './images/html.png']
		for (var i in data) {
			var type = data[i].fType
			if (type == 0) {
				li += `<li data-bh="8" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[0]}" alt="" class="diskImg diskImg1">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 1) {
				li += `<li data-bh="8" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[5]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 2) {
				li += `<li data-bh="8" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 3) {
				li += `<li data-bh="8" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 4) {
				li += `<li data-bh="8" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[7]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 5) {
				li += `<li data-bh="8" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[2]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 6) {
				li += `<li data-bh="8" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
						<img src="${imgUrl[4]}" alt="" class="diskImg">
						<p title="${data[i].fName}">${data[i].fName}</p>
					</li>`
			} else if (type == 7) {
				li += `<li data-bh="8" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 8) {
				li += `<li data-bh="8" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 9) {
				li += `<li data-bh="8" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			}
		}
		$('.shzr .wjj .disk-box ul').html(li)
		$(".shzr .wjj #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
			pg_call_fun: function (count) {
			}
		});
		$(".shzr .diskShow #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
		});
	}).catch(err => {
		console.log(err)
	})
}
getshzr('publicEducation');

$(document).on('click', '.shzr #next', function () {
	pageNum++
	getshzr('publicEducation');
})

$(document).on('click', '.shzr #prev', function () {
	pageNum--
	if (pageNum <= 0) {
		pageNum = 1
	}
	getshzr('publicEducation');
})
$(document).on('click', '.shzr .pg-showpage', function () {
	var val = $(this).text()
	pageNum = val
	getshzr('publicEducation');
})

// 点击网点设施里面的li
$('.shzr .ygglNav ul li').eq(0).click(function () {
	getshzr('publicEducation');
})
$('.shzr .ygglNav ul li').eq(1).click(function () {
	getshzr('socialResponsibility');
})


// 会议活动
function gethyhd(publicEducation) {
	jqPostAjaxPromise({
		url: "fileEditor/list?pageSize=" + pageSize + "&pageNum=" + pageNum + "&fName=&fParentId=0&fParam=" + publicEducation,
		type: "get",
		data: {}
	}).then(res => {
		var data = res.rows
		total = res.total
		var li = ''
		var imgUrl = ['./images/disk.png', './images/excel.png', './images/jpg.png', './images/pdf.png', './images/ppt.png', './images/txt.png', './images/word.png', './images/html.png']
		for (var i in data) {
			var type = data[i].fType
			if (type == 0) {
				li += `<li data-bh="9" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[0]}" alt="" class="diskImg diskImg1">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 1) {
				li += `<li data-bh="9" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[5]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 2) {
				li += `<li data-bh="9" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 3) {
				li += `<li data-bh="9" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 4) {
				li += `<li data-bh="9" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[7]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 5) {
				li += `<li data-bh="9" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[2]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 6) {
				li += `<li data-bh="9" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
						<img src="${imgUrl[4]}" alt="" class="diskImg">
						<p title="${data[i].fName}">${data[i].fName}</p>
					</li>`
			} else if (type == 7) {
				li += `<li data-bh="9" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 8) {
				li += `<li data-bh="9" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 9) {
				li += `<li data-bh="9" data-lx="${data[i].fParam}" class="liuxu1" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			}
		}
		$('.hyhd .wjj .disk-box ul').html(li)
		$(".hyhd .wjj #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
			pg_call_fun: function (count) {
			}
		});
		$(".hyhd .diskShow #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
		});
	}).catch(err => {
		console.log(err)
	})
}
gethyhd('activity');
$('.hyhd .ygglNav ul li').eq(0).click(function () {
	gethyhd('meeting');
})
$(document).on('click', '.hyhd #next', function () {
	pageNum++
	gethyhd('meeting');
})

$(document).on('click', '.hyhd #prev', function () {
	pageNum--
	if (pageNum <= 0) {
		pageNum = 1
	}
	gethyhd('meeting');
})
$(document).on('click', '.hyhd .pg-showpage', function () {
	var val = $(this).text()
	pageNum = val
	gethyhd('meeting');
})
$('.hyhd .ygglNav ul li').eq(1).click(function () {
	gethyhd('activity');
})



// 请求查看详情数据
function getxq(id, url, bh) {
	// $('.diskContent').fadeIn(100)
	var id;
	var bh
	// var liuxu
	url = "fileEditor/get?fId=" + id,
		Http.push(url)
	jqPostAjaxPromise({
		url: "fileEditor/get?fId=" + id,
		type: "get",
		data: {}
	}).then(res => {
		var data = res.msg
		console.log(data)
		var div = '',div1 = '',div2 = '',div3 = '',div4 = ''
		var p = ''
		var str = ''
		var p1 = ''
		var type = data.fType
		var imgT = ['./images/hd1.png', './images/hd2.png', './images/hd3.png', './images/hd4.png',]
		var imgB = ['./images/hd1-1.png', './images/hd2-2.png', './images/hd3-3.png', './images/hd4-4.png',]
		var img2 = ['./images/hy1.png', './images/hy2.png', './images/hy3.png', './images/hy4.png']
		var bg = data.background
		console.log(bg)
		
		if (type == 2 || type == 6 || type == 1) {
			// var fillName = data.fPdfPath.substring((data.fPdfPath || '').lastIndexOf('.') + 1);
			div += `<p class="title" title="${data.fName}">${data.fName}</p>
				<div class="embed" data-hz=><embed src="${data.fPdfPath}"></div>`
		} else if (type == 7) {
			div += `<div class="hd">
				<img src="" alt="" class="hdImg">
				<p class="hdHeader">${data.fName}</p>
				<div class="hdContent">${data.fContent}</div>
				<img src="" alt="" class="hdImg1">
			</div>`

		} else if (type == 9) {
			var biaoge = JSON.parse(data.fContent)
			var complaintInfo  ='';
			var div = ''
			for(var i in biaoge.complaint){
				complaintInfo +=`<tr class="complaintInfo">
				<td align="left" valign="center" style="font-weight:400;font-size: 105%;width: 80px;border:solid #000000 1px;" colspan="2">
					<span>${biaoge.complaint[i].clientNo==undefined?'':biaoge.complaint[i].clientNo}</span>	
				</td>
				<td align="left" valign="center" style="font-weight:400;font-size: 105%;width: 80px;border:solid #000000 1px;" colspan="2">
					<span>${biaoge.complaint[i].clientName==undefined?'':biaoge.complaint[i].clientName}</span>
				</td>
				<td align="left" valign="center" style="font-weight:400;font-size: 105%;width: 80px;border:solid #000000 1px;" colspan="2">
					<span>${biaoge.complaint[i].clientPhone==undefined?'':biaoge.complaint[i].clientPhone}</span>	
				</td>
				<td rowspan="1" colspan="2" align="left" valign="center" style="font-weight:400;font-size: 105%;width: 80px;border:solid #000000 1px;">
					<span>${biaoge.complaint[i].suggest==undefined?'':biaoge.complaint[i].suggest}</span>	
				</td>
				<td rowspan="1" colspan="3" align="center" valign="center" style="font-weight:400;font-size: 105%;width: 500pt;border:solid #000000 1px;">
					<span>${biaoge.complaint[i].result==undefined?'':biaoge.complaint[i].result}</span>	
				</td>
			</tr>`
			}

			var patrolTimeArr = (biaoge.patrolTime || '').split('|@|'),patrolStatusArr = (biaoge.patrolStatus || '').split('|@|')
			var  patrolTimeStr ='',patrolStatus='';
			console.log(patrolStatusArr)
			for(var i in patrolTimeArr){
				patrolTimeStr += `<td align="center" valign="center"
				style="font-weight:400;font-size: 105%;width: 87pt;border:solid #000000 1px;color: #000000;">
				<span>${patrolTimeArr[i]}</span>
				</td>`
			}
			for(var i in patrolStatusArr){
				patrolStatus += `<td align="center" valign="center"
				style="font-weight:400;font-size: 105%;width: 87pt;border:solid #000000 1px;color: #000000;">
				<span>${patrolStatusArr[i]}</span>
				</td>`
			}


			div += `<div class="container logInfo">
			<table style="border-collapse:collapse;">
				<tbody>
					<tr>
						<td rowspan="1" colspan="9" align="center"
							style="font-weight:700;font-size: 220%;width: 1646pt;color:#000000;border:solid #000000 1px;">
							大堂经理工作日志
						</td>
						<td align="left"
							style="font-weight:700;font-size: 110%;width:66pt;color:#000000;border:solid #000000 1px;">日期：
						</td>
						<td align="left"
							style="font-weight:700;font-size: 110%;width: 121pt;color:#000000;border:solid #000000 1px;"
						colspan="2"><span>${biaoge.logDate==undefined?'':biaoge.logDate}</span>
	
					</tr>
					<tr>
						<td rowspan="8" colspan="1" align="center" valign="center"
							style="font-weight:400;font-size: 105%;width:84pt;color:#000000;border:solid #000000 1px;">
							大堂情况记录</td>
	
						<td rowspan="1" colspan="3" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width: 160px;color:#000000;border:solid #000000 1px;">
							1.营业秩序</td>
						<td rowspan="1" colspan="3" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:252pt;color:#000000;border:solid #000000 1px;">
							<input type="checkbox" name="order" value="1" style="width: 40px !important;">良好
							<input type="checkbox" name="order" value="2" style="width: 40px !important;">一般
							<input type="checkbox" name="order" value="3" style="width: 40px !important;">差
						</td>
						<td rowspan="1" colspan="5" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:619pt;color:#000000;border:solid #000000 1px;">
							差的原因：<span>${biaoge.orderReason==undefined?'':biaoge.orderReason}</span>
						</td>
					</tr>
	
					<tr>
						<td rowspan="1" colspan="3" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width: 160px;color:#000000;border:solid #000000 1px;">
							2.客流量</td>
						<td rowspan="1" colspan="3" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:252pt;color:#000000;border:solid #000000 1px;">
							<input type="checkbox" name="guestFlow" value="1" style="width: 40px !important;">小&nbsp;&nbsp;&nbsp;&nbsp;
							<input type="checkbox" name="guestFlow" value="2" style="width: 40px !important;">正常
							<input type="checkbox" name="guestFlow" value="3" style="width: 40px !important;">大
						</td>
						<td rowspan="1" colspan="5" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:619pt;color:#000000;border:solid #000000 1px;">
							非正常的原因：<span>${biaoge.guestFlowReason==undefined?'':biaoge.guestFlowReason}</span>
						</td>
					</tr>
	
					<tr>
						<td rowspan="1" colspan="3" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width: 160px;color:#000000;border:solid #000000 1px;">
							3.营业环境</td>
						<td rowspan="1" colspan="3" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:252pt;color:#000000;border:solid #000000 1px;">
							<input type="checkbox" name="openEnvironment" value="1" style="width: 40px !important;">良好
							<input type="checkbox" name="openEnvironment" value="2" style="width: 40px !important;">一般
							<input type="checkbox" name="openEnvironment" value="3" style="width: 40px !important;">差
						</td>
						<td rowspan="1" colspan="5" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:619pt;color:#000000;border:solid #000000 1px;">
							差的原因：<span>${biaoge.openEnvironmentReason==undefined?'':biaoge.openEnvironmentReason}</span>
						</td>
					</tr>
					<tr>
						<td rowspan="2" colspan="3" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width: 160px;color:#000000;border:solid #000000 1px;">
							4.自助设备</td>
						<td rowspan="2" colspan="3" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:252pt;color:#000000;border:solid #000000 1px;">
							<input type="checkbox" name="device" value="1" style="width: 40px !important;"
								>正常&nbsp;&nbsp;&nbsp;&nbsp;
							<input type="checkbox" name="device" value="2" style="width: 40px !important;">出现故障
						</td>
						<td rowspan="2" colspan="4" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:525pt;color:#000000;border:solid #000000 1px;">
							故障设备：<span>${biaoge.deviceName==undefined?'':biaoge.deviceName}</span>
						</td>
						<td align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:84pt;color:#000000;border:solid #000000 1px;">
							<input type="checkbox" class="form-control deviceStatus" name="deviceStatus" value="1"
								 style="width:30px !important">已修好
						</td>
					</tr>
					<tr>
						<td align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:84pt;color:#000000;border:solid #000000 1px;">
							<input type="checkbox"  style="width:30px !important" class="form-control deviceStatus" name="deviceStatus" value="2">待维修
						</td>
					</tr>
					<tr>
						<td rowspan="1" colspan="3" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width: 160px;color:#000000;border:solid #000000 1px;">
							5.宣传资料</td>
						<td rowspan="1" colspan="3" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:252pt;color:#000000;border:solid #000000 1px;">
							<input type="checkbox" name="brochure" value="1" style="width: 40px !important;">已更新
							<input type="checkbox" name="brochure" value="2" style="width: 40px !important;">待更新</td>
						<td rowspan="1" colspan="5" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:619pt;color:#000000;border:solid #000000 1px;">
							待更新原因：<span>${biaoge.brochureReason==undefined?'':biaoge.brochureReason}</span>
						</td>
					</tr>
					<tr>
						<td rowspan="1" colspan="3" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width: 160px;color:#000000;border:solid #000000 1px;">
							6.员工服务态度</td>
						<td rowspan="1" colspan="3" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:252pt;color:#000000;border:solid #000000 1px;">
							<input type="checkbox" name="attitude" value="1" style="width: 40px !important;"
								>好&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<input type="checkbox" name="attitude" value="2" style="width: 40px !important;">待改进</td>
	
						<td rowspan="1" colspan="5" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:619pt;color:#000000;border:solid #000000 1px;">
							待改进原因：<span>${biaoge.attitudeReason==undefined?'':biaoge.attitudeReason}</span>
						</td>
					</tr>
					<tr>
						<td rowspan="1" colspan="3" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width: 160px;color:#000000;border:solid #000000 1px;">
							7.员工服务效率</td>
						<td rowspan="1" colspan="3" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:252pt;color:#000000;border:solid #000000 1px;">
							<input type="checkbox" name="efficient" value="1" style="width: 40px !important;"
								>高&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<input type="checkbox" name="efficient" value="2" style="width: 40px !important;">待提高</td>
	
						<td rowspan="1" colspan="5" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:619pt;color:#000000;border:solid #000000 1px;">
							待提高原因：<span>${biaoge.efficientReason==undefined?'':biaoge.efficientReason}</span>
						</td>
					</tr>
					<tr>
						<td rowspan="5" colspan="1" align="center" valign="center"
							style="font-weight:400;font-size: 105%;width:84pt;border:solid #000000 1px;color: #000000;">
							客户投诉问题、建议及处理情况</td>
						<td align="center" valign="center"
							style="font-weight:400;font-size: 105%;width: 80px;border:solid #000000 1px;color: #000000;"
							colspan="2">序号</td>
						<td align="center" valign="center"
							style="font-weight:400;font-size: 105%;width: 80px;border:solid #000000 1px;color: #000000;"
							colspan="2">客户姓名</td>
						<td align="center" valign="center"
							style="font-weight:400;font-size: 105%;width:84pt;border:solid #000000 1px;color: #000000;"
							colspan="2">联系电话</td>
						<td rowspan="1" colspan="2" align="center" valign="center"
							style="font-weight:400;font-size: 105%;width:252pt;border:solid #000000 1px;color: #000000;">
							投诉问题或建议描述</td>
						<td rowspan="1" colspan="3" align="center" valign="center"
							style="font-weight:400;font-size: 105%;width: 500pt;border:solid #000000 1px;color: #000000;">
							处理及反馈情况</td>
					</tr>`+
					complaintInfo
					+`<tr>
						<td align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:84pt;border:solid #000000 1px;color: #000000;">
							潜在客户挖掘情况</td>
						<td rowspan="1" colspan="11" align="left" valign="center"
							style="font-weight:400;font-size: 105%;width:1050pt;border:solid #000000 1px;">
							<span>${biaoge.situation==undefined?'':biaoge.situation}</span>
							<input type="text" class="form-control situation" style="width:100%;text-align: center;">
						</td>
					</tr>
					
					<tr>
						<td rowspan="2" colspan="1" align="center" valign="center"
							style="font-weight:400;font-size: 105%;width:84pt;border:solid #000000 1px;color: #000000;">
							STM巡查情况</td>
							<td align="center" valign="center"
                        style="font-weight:400;font-size: 105%;width: 87pt;border:solid #000000 1px;color: #000000;">时间
                    </td>
						`+patrolTimeStr+`
					
						
					</tr>
					<tr>
						<td align="center" valign="center"
							style="font-weight:400;font-size: 105%;width: 87pt;border:solid #000000 1px;color: #000000;">状态
						</td>
						`+patrolStatus+`
						
					</tr>
					<tr>
						<td align="center" valign="center"
							style="font-weight:400;font-size: 105%;width:84pt;border:solid #000000 1px;color: #000000;">
							当日服务小结</td>
						<td rowspan="1" colspan="11" align="center" valign="center"
							style="font-weight:400;font-size: 105%;width:1050pt;border:solid #000000 1px;">
							<span>${biaoge.summary==undefined?'':biaoge.summary}</span>
						</td>
					</tr>
					<tr>
						<td align="center" valign="center"
							style="font-weight:400;font-size: 105%;width:84pt;border:solid #000000 1px;color: #000000;">工作备忘
						</td>
						<td rowspan="1" colspan="11" align="center" valign="center"
							style="font-weight:400;font-size: 105%;width:1050pt;border:solid #000000 1px;">
							<span>${biaoge.workMemo==undefined?'':biaoge.workMemo}</span>
						</td>
					</tr>
	
					<tr>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td align="left" colspan="2" valign="bottom"
							style="font-weight:400;font-size: 110%;width:88pt;color:#000000;color: #000000;">大堂经理签名：</td>
						<td align="left" colspan="2" valign="bottom"
							style="font-weight:400;font-size: 110%;width:110pt;color:#000000;">
							<span>${biaoge.managerName==undefined?'':biaoge.managerName}</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>`
		
		} else if (type == 8) {
			var content = JSON.parse(data.fContent)
			var mainC = content.mainContent.split('\n')
			var effect = content.effect.split('\n')
			div += `<div class="hd hy">
				<div class="hyContent" >
					<img src="" class="hyBj">
					<div>
						<p class="hyContentHeader">${content.meetingName}</p>
						<table border="2" cellspacing="0">
							<tr>
								<td colspan="2" class="time">${content.period}</td>
							</tr>
							<tr>
								<td class="nr">会议时间：<span>${content.meetingDate}</span></td>
								<td class="nr">会议地点：<span>${content.meetingSite}</span></td>
							</tr>
							<tr>
								<td class="nr" colspan="2">会议内容：<span>${content.meetingContent}</span></td>
							</tr>
							<tr>
								<td class="nr" colspan="2">参加人员：<span>全体员工</span></td>
							</tr>
							<tr>
								<td class="nr nr1" colspan="2">
									主要内容：
									<div>
									</div>
								</td>
							</tr>
							<tr>
								<td class="nr xg" colspan="2">
									培训效果：
									<div>
									</div>
								</td>
							</tr>
							<tr>
								<td class="nr imgShow" colspan="2">
									图片展示：
									<div><img src="${content.picturesShow}" alt=""></div>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>`
			for (var i in mainC) {
				p += `<p>${mainC[i]}</p>`
			}
			for (var i in effect) {
				p1 += `<p>${effect[i]}</p>`
			}
		} else {
			// var fillName = data.fPath.substring((data.fPath || '').lastIndexOf('.') + 1);
			div += `<p class="title" title="${data.fName}">${data.fName}</p>
			<div class="embed" data-hz=""><embed src="${data.fPath}"></div>`
		}
		$('.diskContent-content').html(div)
		$('.nr1 div').html(p)
		$('.xg div').html(p1)
		if (type != 5) {
			$('.embed').find('embed').css({ height: '100%' })
		}
		if (bg == 1) {
			$('.hdImg').attr('src', imgT[0])
			$('.hdImg1').attr('src', imgB[0])
			$('.diskContent-content .hd .hdHeader').css({ color: '#AD0303' })
		} else if (bg == 2) {
			$('.hdImg').attr('src', imgT[1])
			$('.hdImg1').attr('src', imgB[1])
			$('.diskContent-content .hd .hdHeader').css({ color: '#475A91' })
		} else if (bg == 3) {
			$('.hdImg').attr('src', imgT[2])
			$('.hdImg1').attr('src', imgB[2])
			$('.diskContent-content .hd .hdHeader').css({ color: '#966D13' })
		} else if (bg == 4) {
			$('.hdImg').attr('src', imgT[3])
			$('.hdImg1').attr('src', imgB[3])
			$('.diskContent-content .hd .hdHeader').css({ color: '#0F75A6' })
		} else if (bg == 5) {
			$('.hyBj').attr('src', img2[0])
		} else if (bg == 6) {
			$('.hyBj').attr('src', img2[1])
		} else if (bg == 7) {
			$('.hyBj').attr('src', img2[2])
		} else if (bg == 8) {
			$('.hyBj').attr('src', img2[3])
		}
		$('.orderReason').val(data.orderReason)
		$('.logInfo td input[type=checkbox]').attr("disabled","disabled")
		$('.logInfo td input[type="checkbox"]').css({width:'20px !important'})
		$("input[type='checkbox'][name=order][value='"+biaoge.order+"']").prop("checked",true);
		$("input[type='checkbox'][name=guestFlow][value='"+biaoge.guestFlow+"']").prop("checked",true);
		$("input[type='checkbox'][name=openEnvironment][value='"+biaoge.openEnvironment+"']").prop("checked",true);
		$("input[type='checkbox'][name=device][value='"+biaoge.device+"']").prop("checked",true);
		$("input[type='checkbox'][name=brochure][value='"+biaoge.brochure+"']").prop("checked",true);
		$("input[type='checkbox'][name=attitude][value='"+biaoge.attitude+"']").prop("checked",true);
		$("input[type='checkbox'][name=efficient][value='"+biaoge.efficient+"']").prop("checked",true);
		$("input[type='checkbox'][name=deviceStatus][value='"+biaoge.deviceStatus+"']").prop("checked",true);
		
		
	}).catch(err => {
		console.log(err)
	})
}


// 请求二级文件夹数据
var Http = []
function getejwjj(id, lx, bh, url) {
	var id;
	var bh;
	url = "fileEditor/list?pageSize=" + pageSize + "&pageNum=" + pageNum + "&fName=&fParam=" + lx + "&fParentId=" + id
	Http.push(url)
	jqPostAjaxPromise({
		url: "fileEditor/list?pageSize=" + pageSize + "&pageNum=" + pageNum + "&fName=&fParam=" + lx + "&fParentId=" + id,
		// url:url,
		type: "get",
		data: {}
	}).then(res => {
		var data = res.rows
		total = res.total
		var li = ''
		var imgUrl = ['./images/disk.png', './images/excel.png', './images/jpg.png', './images/pdf.png', './images/ppt.png', './images/txt.png', './images/word.png', './images/html.png']
		for (var i in data) {
			var type = data[i].fType
			if (type == 0) {
				li += `<li data-bh="${bh}" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[0]}" alt="" class="diskImg diskImg1">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 1) {
				li += `<li data-bh="${bh}" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[5]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 2) {
				li += `<li data-bh="${bh}" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 3) {
				li += `<li data-bh="${bh}" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 4) {
				li += `<li data-bh="${bh}" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[7]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 5) {
				li += `<li data-bh="${bh}" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[2]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 6) {
				li += `<li data-bh="${bh}" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 7) {
				li += `<li data-bh="${bh}" data-bh="1" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 8) {
				li += `<li data-bh="${bh}" data-bh="1" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			}else if (type == 9) {
				li += `<li data-bh="${bh}" data-bh="1" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			}
		}
		$(".wdhj .diskShow #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 3,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
		});
		$('.list .diskShow .disk .disk-box ul').html(li)
	}).catch(err => {
		console.log(err)
	})
}


function getejwjj1(url, bh) {
	var id;
	var bh;
	var url
	jqPostAjaxPromise({
		url: url,
		type: "get",
		data: {}
	}).then(res => {
		var data = res.rows
		total = res.total
		var li = ''
		var imgUrl = ['./images/disk.png', './images/excel.png', './images/jpg.png', './images/pdf.png', './images/ppt.png', './images/txt.png', './images/word.png', './images/html.png']
		for (var i in data) {
			var type = data[i].fType
			if (type == 0) {
				li += `<li data-bh="${bh}" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[0]}" alt="" class="diskImg diskImg1">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 1) {
				li += `<li data-bh="${bh}" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[5]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 2) {
				li += `<li data-bh="${bh}" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 3) {
				li += `<li data-bh="${bh}" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 4) {
				li += `<li data-bh="${bh}" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[7]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 5) {
				li += `<li data-bh="${bh}" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[2]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 6) {
				li += `<li data-bh="${bh}" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 7) {
				li += `<li data-bh="${bh}" data-bh="1" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 8) {
				li += `<li data-bh="${bh}" data-bh="1" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			}
		}
		$('.list .diskShow .disk .disk-box ul').html(li)
	}).catch(err => {
		console.log(err)
	})
}

// 二级文件夹返回事件
// $(document).on('click', '.diskContent .back2', function () {
// 	// alert('liuxu')
// 	// Http.splice(-1)
// 	// var url = Http[Http.length - 1]
// 	// getejwjj1(url, bh)
// 	// if (Http.length == 0) {
// 	// 	$('.diskShow').fadeOut()
// 	// 	$('.wjj').fadeIn(100)
// 	// }

// })


// 如果是文件夹继续打开文件夹，如果是文件直接发开文件
function fn(id, lx, type, bh) {
	var bh
	if (type != 0) {
		// alert('不等于0')
		$('.diskContent').fadeIn(100)
		getxq(id, url, bh)
	} else if (type == 0) {
		$('.diskShow').fadeIn(100)
		$('.wjj').fadeOut()
		getejwjj(id, lx, bh)
		// getejwjj1(id, lx, bh)
		$(document).on('click', '.diskShow #next', function () {
			pageNum++
			getejwjj(id, lx, bh, url)
		})
		$(document).on('click', '.diskShow #prev', function () {
			pageNum--
			if (pageNum <= 0) {
				pageNum = 1
			}
			getejwjj(id, lx, bh, url)
		})
	}
}


$(document).on('click', '.disk .disk-box ul .liuxu', function () {
	var type = $(this).attr('data-type')
	var id = $(this).attr('data-id')
	var lx = $(this).attr('data-lx')
	var bh = $(this).attr('data-bh')
	var liuxu = $(this).attr('class')
	if (type != 0) {
		$('.diskContent').fadeIn(100)
		getxq(id, url, bh)
	} else if (type == 0) {
		// alert('二级等于0')
		$('.diskShow').fadeIn(100)
		$('.diskContent').fadeOut(200)
		$('.wjj').fadeOut()
		getejwjj(id, lx, bh)
		$(document).on('click', '.diskShow #next', function () {
			pageNum++
			getejwjj(id, lx, bh)
		})

		$(document).on('click', '.diskShow #prev', function () {
			pageNum--
			if (pageNum <= 0) {
				pageNum = 1
			}
			getejwjj(id, lx, bh)
		})
		$(document).on('click', '.diskShow .pg-showpage', function () {
			var val = $(this).text()
			pageNum = val
			getejwjj(id, lx, bh)
		})
	}
})

$(document).on('click', '.wjj .disk .disk-box ul .liuxu1', function () {
	var type = $(this).attr('data-type')
	var bh = $(this).attr('data-bh')
	var id = $(this).attr('data-id')
	var lx = $(this).attr('data-lx')
	var liuxu = $(this).attr('class')
	fn(id, lx, type, bh)
	if (type != 0) {
		$('.diskContent').fadeIn(100)
		getxq(id, url, bh)
	} else if (type == 0) {
		// alert('二级等于0')
		$('.diskShow').fadeIn(100)
		$('.diskContent').fadeOut(200)
		$('.wjj').fadeOut()
		getejwjj(id, lx, bh)
		$(document).on('click', '.diskShow #next', function () {
			pageNum++
			getejwjj(id, lx, bh)
		})

		$(document).on('click', '.diskShow #prev', function () {
			pageNum--
			if (pageNum <= 0) {
				pageNum = 1
			}
			getejwjj(id, lx, bh)
		})
		$(document).on('click', '.diskShow .pg-showpage', function () {
			var val = $(this).text()
			pageNum = val
			getejwjj(id, lx, bh)
		})
	}
})


// 搜索
// &fType=-1
function getsearch(value) {
	jqPostAjaxPromise({
		url: "fileEditor/list?pageSize=" + pageSize + "&pageNum=" + pageNum + "&fParam=&fParentId=0&fName=" + value,
		type: "get",
		data: {}
	}).then(res => {
		var data = res.rows
		// data1 = data
		console.log(data)
		total = res.total
		var li = ''
		var imgUrl = ['./images/disk.png', './images/excel.png', './images/jpg.png', './images/pdf.png', './images/ppt.png', './images/txt.png', './images/word.png', './images/html.png']
		for (var i in data) {
			var type = data[i].fType
			if (type == 0) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[0]}" alt="" class="diskImg diskImg1">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 1) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[5]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 2) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[1]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 3) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 4) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[7]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 5) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[2]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 6) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 7) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu1 liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[3]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			} else if (type == 8) {
				li += `<li data-bh="1" data-lx="${data[i].fParam}" class="liuxu1 liuxu" data-type="${data[i].fType}" data-id="${data[i].fId}">
					<img src="${imgUrl[4]}" alt="" class="diskImg">
					<p title="${data[i].fName}">${data[i].fName}</p>
				</li>`
			}
		}
		$('.searchIndexContent ul').html(li)
		$(".searchIndex #pagerArea").cypager({
			pg_size: pageSize,
			pg_nav_count: 4,
			pg_total_count: total,
			pg_cur_count: pageNum,
			pg_next_name: '下一页',
			pg_prev_name: '上一页',
			pg_call_fun: function (count) {
			}
		});
	}).catch(err => {
		console.log(err)
	})
}
var value = $('.input input').val()
$(document).on('click', '.searchIndex #next', function () {
	pageNum++
	getsearch(value)
})

$(document).on('click', '.searchIndex #prev', function () {
	pageNum--
	if (pageNum <= 0) {
		pageNum = 1
	}
	getsearch(value)
})
$(document).on('click', '.searchIndex .pg-showpage', function () {
	var val = $(this).text()
	pageNum = val
	getsearch(value)
})



$(document).on('click', '.inputImg', function (e) {
	var value = $(this).parent().find('input').val()
	$('.hahah').fadeIn(100)
	// $('.list').fadeIn()
	$('.list .wjj').fadeIn()
	getsearch(value);
})

$(document).on('click', '.list .ygglNav ul li', function () {
	$('.diskContent').fadeOut()
	$('.wjj').fadeIn(100)
	$('.mbx ul').html('')
	arr1 = []
	$('.diskContent-back.backSearch').removeClass('backSearch')
})

// 关闭历史记录
$(document).on('click', '.bottomNavCha,.closeCha', function () {
	$(this).parent().remove()
	// $('.mbx ul').html('')
	// arr1 = []
	// Http = []
	var len = $('.bottomNav ul li').length
	var liuxu = $(this).parent().attr('data-class')
	console.log(liuxu)
	// if (len == 0) {
	if (liuxu == 'liuxu1') {
		$('.diskContent').fadeOut()
		$('.wjj').fadeIn(100)
		$('.diskShow').fadeOut()
	} else if (liuxu == 'liuxu') {
		$('.diskContent').fadeOut()
		$('.diskShow').fadeIn(100)
		$('.wjj').fadeOut()
	}
	// }
})

$(document).on('click', '.diskShow .bottomNavCha,.closeCha', function () {
	$(this).parent().remove()
	$('.mbx ul').html('')
	arr1 = []
	Http = []
	var len = $('.diskShow .bottomNav ul li').length
	if (len == 0) {
		$('.diskContent').fadeOut()
		$('.diskShow').fadeOut()
		$('.wjj').fadeIn(100)
	}
})

// 点击搜索结果
$(document).on('click', '.searchIndexContent li', function (event) {
	$('.searchIndexContent li p.actionP').removeClass('actionP')
	$(this).find('p').addClass('actionP')
	// $('.wjj').fadeIn(100)
	// $('.diskContent').fadeIn(100)
	$('.diskContent-back.back2').removeClass('back2')


	$('.diskContent-back').addClass('backSearch')
	$(document).on('click', '.backSearch', function () {
		$('.searchIndex').fadeIn('100')
		$('.list').fadeOut()
		$('.hahah').fadeOut()
		$('.diskContent').fadeOut()
		$('.diskShow').fadeOut()
		$('.ygglNav ul li.action1').removeClass('action1')
		$('.list .leftNav ul li.action').removeClass('action')
		$('.list .leftNav ul li .left').hide()
		$('.list .leftNav ul li .icon1').hide()
		$('.list .leftNav ul li p').css({ color: 'rgba(255,255,255,.6)' })
		$('.yggl').fadeOut()
	})
	// 历史记录
	var type = $(this).attr('data-type')
	var id = $(this).attr('data-id')
	var lx = $(this).attr('data-lx')
	var bh = $(this).attr('data-bh')
	$('.list').fadeIn()
	$('.searchIndex').fadeOut()
	fn(id, lx, type)
	// var arr = []
	// if (type != 0) {
	// 	arr.push($(this).text())
	// 	arr.forEach(function (item) {
	// 		var $tr = $(`
	// 		<li data-type="${type}" data-id="${id}" "title="` + item + `">
	// 			<p>${item}</p>
	// 			<img src="./images/cha.png" alt="" class="bottomNavCha">
	// 			<img src="./images/cha1.png" alt="" class="bottomNavCha bottomNavCha1">
	// 			<img src="./images/closeCha.png" class="closeCha">
	// 		</li>`
	// 		);
	// 		$('.bottomNav ul').append($tr)
	// 	});
	// }


	// 根据判断搜索结果的类型给二级导航添加选中状态
	var li = $('.ygglNav ul li')
	for (var i in li) {
		var type = li.eq(i).attr('data-type');
		if (type == lx) {
			$('.ygglNav ul li.action1').removeClass('action1')
			$('.ygglNav ul li').eq(i).addClass('action1')
		}
	}

	// 根据判断二级导航的编号给一级导航添加选中状态
	var bianhao = $('.ygglNav ul').find('.action1').attr('data-bh')
	var leftLi = $('.list .leftNav ul li')
	for (var i in leftLi) {
		var bianhao2 = leftLi.eq(i).attr('data-bh')
		if (bianhao == bianhao2) {
			$('.list .leftNav ul li').eq(i).addClass('action')
			$('.list .leftNav ul li .left').eq(i).fadeIn()
			$('.list .leftNav ul li .icon1').eq(i).fadeIn()
			$('.list .leftNav ul li p').eq(i).css({ color: '#fff' })
		}
	}
	// var index = $(this).attr('data-index')

	// 根据判断一级导航为选中状态是的编号让对应的模块显示
	if (bianhao == 0) {
		$('.wdhj').fadeIn(100)
		// $('.wdhj .mbx ul').append(str)
	} else if (bianhao == 1) {
		$('.wdss').fadeIn(100)
		// $('.wdss .mbx ul').append(str)
	} else if (bianhao == 2) {
		$('.fwgn').fadeIn(100)
		// $('.fwgn .mbx ul').append(str)
	} else if (bianhao == 3) {
		$('.yggl1').fadeIn(100)
		// $('.yggl1 .mbx ul').append(str)
	} else if (bianhao == 4) {
		$('.gwgf').fadeIn(100)
		// $('.gwgf .mbx ul').append(str)
	} else if (bianhao == 5) {
		$('.fwzd').fadeIn(100)
		// $('.fwzd .mbx ul').append(str)
	} else if (bianhao == 6) {
		$('.fwwh').fadeIn(100)
		// $('.fwwh .mbx ul').append(str)
	} else if (bianhao == 7) {
		$('.jyyj').fadeIn(100)
		// $('.jyyj .mbx ul').append(str)
	} else {
		$('.shzr').fadeIn(100)
		// $('.shzr .mbx ul').append(str)
	}
})

// 点击搜索返回按钮
$(document).on('click', '.searchBack', function () {
	$('.searchIndex').fadeOut()
	$('.list').fadeIn(100)
	$('.hahah').fadeOut()
	$('.list .ygglNav ul li').eq(0).addClass('action1')
	$('.list .leftNav ul li').eq(0).addClass('action')
	$('.list .leftNav ul li').eq(0).find('p').css({ color: '#fff' })
	$('.list .leftNav ul li').eq(0).find('.left').fadeIn()
	$('.list .leftNav ul li').eq(0).find('.icon1').fadeIn()
	// $('.wdhj').fadeIn(100)
})

$('.input input').bind('keypress', function (event) {
	var value = $(this).parent().find('input').val()
	if (event.keyCode == "13") {
		$('.hahah').fadeIn(100)
		getsearch(value);
	}
})

// 点击列表页里面的li
var arr1 = []

// console.log(newArr)
// arr1 = newArr
function menu(id, title, index) {
	var o = new Object();
	o.id = id;
	o.title = title;
	o.index = index;
	return o;
}
$(document).on('click', '.disk .disk-box ul li,.searchIndexContent li', function (event) {
	$('.disk .disk-box ul li p.actionP').removeClass('actionP')
	$(this).find('p').addClass('actionP')
	$('.wjj').fadeOut()
	// 历史记录
	arr1 = Array.from(new Set(arr1))
	// console.log(arr1)
	var type = $(this).attr('data-type')
	var id = $(this).attr('data-id')
	var lx = $(this).attr('data-lx')
	var bh = $(this).attr('data-bh')
	// console.log(bh)
	var index = $(this).attr('data-index')
	var str = ``;
	var liuxu = $(this).attr('class')
	// if(type != 0 ){
	// 	$('.diskContent').fadeIn(100)
	// 	getxq(id, liuxu)
	// }
	if (type == 0) {
		arr1.push(menu(id, $(this).text().trim(), index))
		$('.mbx ul li').remove()
		arr1.forEach(function (item, index) {
			str += `
			<li data-bh="${bh}" data-index="${index}" data-type="${type}" data-id="${item.id}" title="${item.title}">
				<p>${item.title}</p><span> > </span> 
			</li>`
		})
	}

	// 640568899649545
	var arr = []
	var tr = ''
	if (type != 0) {
		arr.push($(this).text())
		arr.forEach(function (item) {
			tr += `<li data-class="${liuxu}" data-type="${type}" data-id="${id}" title="` + item + `">
				<p>${item}</p>
				<img src="./images/cha.png" alt="" class="bottomNavCha">
				<img src="./images/cha1.png" alt="" class="bottomNavCha bottomNavCha1">
				<img src="./images/closeCha.png" class="closeCha">
			</li>`
		});

	}
	if (bh == 0) {
		$('.wdhj .bottomNav ul').append(tr)
		$('.wdhj .mbx ul').append(str)
	} else if (bh == 1) {
		$('.wdss .bottomNav ul').append(tr)
		$('.wdss .mbx ul').append(str)
	} else if (bh == 2) {
		$('.fwgn .bottomNav ul').append(tr)
		$('.fwgn .mbx ul').append(str)
	} else if (bh == 3) {
		$('.yggl1 .bottomNav ul').append(tr)
		$('.yggl1 .mbx ul').append(str)
	} else if (bh == 4) {
		$('.gwgf .bottomNav ul').append(tr)
		$('.gwgf .mbx ul').append(str)
	} else if (bh == 5) {
		$('.fwzd .bottomNav ul').append(tr)
		$('.fwzd .mbx ul').append(str)
	} else if (bh == 6) {
		$('.fwwh .bottomNav ul').append(tr)
		$('.fwwh .mbx ul').append(str)
	} else if (bh == 7) {
		$('.jyyj .bottomNav ul').append(tr)
		$('.jyyj .mbx ul').append(str)
	} else if (bh == 8) {
		$('.shzr .bottomNav ul').append(tr)
		$('.shzr .mbx ul').append(str)
	} else if (bh == 9) {
		$('.hyhd .bottomNav ul').append(tr)
		$('.hyhd .mbx ul').append(str)
	}
})


$(document).on('click', '.liuxu1', function () {
	$('.diskContent-back.back2').removeClass('back2')
	$('.diskContent-back').addClass('back1')
})

$(document).on('click', '.liuxu', function () {
	$('.diskContent-back').addClass('back2')
	$('.diskContent-back.back1').removeClass('back1')
})

$(document).on('click', '.search', function () {
	// $('.diskContent-back').addClass('searchback')
	$('.diskContent-back.back2').removeClass('back2')
	$('.diskContent-back.back1').removeClass('back1')
})


$(document).on('click', '.back1', function () {
	$('.wjj').fadeIn(100)
	$('.diskContent').fadeOut()
})

$(document).on('click', '.back2', function () {
	$('.diskShow').fadeIn(100)
	$('.diskContent').fadeOut()
})

$(document).on('click', '.list-logo', function () {
	$('.diskContent').fadeOut()
})


