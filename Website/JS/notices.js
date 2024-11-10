$(document).ready(function() {
    $.get('./json/notices.jsonl', function(data) {
        var lines = data.trim().split('\n');
        var $ul = $('#NoticeList');

        $.each(lines, function(index, line) {
            if (line.trim() !== '') {
                try {
                    var notice = JSON.parse(line);
                    var $li = $('<li>').css({ 'margin-bottom': '20px' }); // Optionally, add some space between items
                    var $a = $('<a>', {
                        text: notice.text,
                        href: notice.url,
                        target: "_blank"
                    });
                    $li.append($a);

                    // For every notice, append an <hr> before adding the <li>
                    var $hrBefore = $('<hr>');
                    $ul.append($hrBefore);

                    $ul.append($li);

                } catch (e) {
                    console.error("Error parsing notice: ", e);
                }
            }
        });

        // Append an <hr> after all list items have been added
        var $lastHr = $('<hr>');
        $ul.append($lastHr);
    }).fail(function() {
        console.error("Failed to load notices.");
    });
});
