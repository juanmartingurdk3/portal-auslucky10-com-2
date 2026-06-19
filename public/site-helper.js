(function() {
    'use strict';

    var SITE_CONFIG = {
        portalUrl: 'https://portal-auslucky10.com',
        keyword: '澳洲幸运10',
        bannerText: '欢迎来到澳洲幸运10资讯中心',
        noteTitle: '页面使用提示',
        badgeColor: '#ff6b35'
    };

    var KEYWORD_TAGS = [
        { label: SITE_CONFIG.keyword, count: 28 },
        { label: '开奖数据', count: 15 },
        { label: '走势分析', count: 22 },
        { label: '历史记录', count: 19 }
    ];

    var ACCESS_GUIDE = [
        '点击顶部导航可浏览不同板块',
        '使用搜索功能快速定位内容',
        '每日更新澳洲幸运10最新结果',
        '数据仅供参考，请以官方为准'
    ];

    function createCard(title, contentList) {
        var card = document.createElement('div');
        card.className = 'site-helper-card';

        var titleEl = document.createElement('h3');
        titleEl.textContent = title;
        titleEl.style.cssText = 'margin:0 0 10px;font-size:18px;color:#333;border-left:4px solid ' + SITE_CONFIG.badgeColor + ';padding-left:10px;';
        card.appendChild(titleEl);

        var list = document.createElement('ul');
        list.style.cssText = 'list-style:none;padding:0;margin:0;';
        contentList.forEach(function(text) {
            var li = document.createElement('li');
            li.textContent = text;
            li.style.cssText = 'padding:6px 0;border-bottom:1px solid #eee;font-size:14px;color:#555;';
            list.appendChild(li);
        });
        card.appendChild(list);

        return card;
    }

    function createBadge(keyword, count) {
        var badge = document.createElement('span');
        badge.className = 'keyword-badge';
        badge.textContent = keyword + ' (' + count + ')';
        badge.style.cssText = 'display:inline-block;margin:4px 6px 4px 0;padding:4px 12px;background:' + SITE_CONFIG.badgeColor + ';color:#fff;border-radius:12px;font-size:13px;cursor:default;';
        return badge;
    }

    function addStyles() {
        var style = document.createElement('style');
        style.textContent = '.site-helper-wrapper{max-width:900px;margin:20px auto;padding:16px;background:#f9fafb;border:1px solid #e0e5ea;border-radius:8px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;}' +
            '.site-helper-wrapper a{color:' + SITE_CONFIG.badgeColor + ';text-decoration:none;}' +
            '.site-helper-wrapper a:hover{text-decoration:underline;}' +
            '.badge-container{margin:15px 0;}';
        document.head.appendChild(style);
    }

    function buildWidget() {
        if (document.querySelector('.site-helper-wrapper')) return;

        addStyles();

        var container = document.createElement('div');
        container.className = 'site-helper-wrapper';

        var banner = document.createElement('div');
        banner.textContent = SITE_CONFIG.bannerText;
        banner.style.cssText = 'font-size:20px;font-weight:700;color:#222;margin-bottom:12px;padding:8px 0;';
        container.appendChild(banner);

        var urlPara = document.createElement('p');
        urlPara.innerHTML = '官方入口：<a href="' + SITE_CONFIG.portalUrl + '" target="_blank" rel="noopener noreferrer">' + SITE_CONFIG.portalUrl + '</a>';
        urlPara.style.cssText = 'margin:0 0 12px;font-size:15px;color:#444;';
        container.appendChild(urlPara);

        var noteCard = createCard(SITE_CONFIG.noteTitle, ACCESS_GUIDE);
        container.appendChild(noteCard);

        var badgeContainer = document.createElement('div');
        badgeContainer.className = 'badge-container';
        badgeContainer.style.cssText = 'margin-top:16px;';
        var badgeLabel = document.createElement('p');
        badgeLabel.textContent = '热门标签：';
        badgeLabel.style.cssText = 'margin:0 0 6px;font-size:15px;color:#333;font-weight:600;';
        badgeContainer.appendChild(badgeLabel);

        KEYWORD_TAGS.forEach(function(tag) {
            badgeContainer.appendChild(createBadge(tag.label, tag.count));
        });

        container.appendChild(badgeContainer);

        var footer = document.createElement('div');
        footer.style.cssText = 'margin-top:16px;font-size:12px;color:#999;border-top:1px solid #ddd;padding-top:8px;text-align:center;';
        footer.textContent = '页面助手 — 提供便捷导航与信息参考';
        container.appendChild(footer);

        var target = document.querySelector('main') || document.body;
        target.appendChild(container);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildWidget);
    } else {
        buildWidget();
    }
})();