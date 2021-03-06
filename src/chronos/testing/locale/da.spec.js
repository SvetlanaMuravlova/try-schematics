import { assertEq } from '../test-helpers';
import { moment } from '../chain';
import { daLocale } from '../../i18n/da';
// localeModule('da');
describe('locale: da', () => {
    beforeAll(() => {
        moment.locale(daLocale.abbr, daLocale);
    });
    afterAll(() => {
        moment.locale('en');
    });
    it('parse', function () {
        var _tests = 'Januar Jan_Februar Feb_Marts Mar_April Apr_Maj Maj_Juni Jun_Juli Jul_August Aug_September Sep_Oktober Okt_November Nov_December Dec'.split('_'), i;
        function equalTest(input, mmm, i) {
            assertEq(moment(input, mmm).month(), i, input + ' should be month ' + (i + 1));
        }
        let tests = [];
        for (i = 0; i < 12; i++) {
            tests[i] = _tests[i].split(' ');
            equalTest(tests[i][0], 'MMM', i);
            equalTest(tests[i][1], 'MMM', i);
            equalTest(tests[i][0], 'MMMM', i);
            equalTest(tests[i][1], 'MMMM', i);
            equalTest(tests[i][0].toLocaleLowerCase(), 'MMMM', i);
            equalTest(tests[i][1].toLocaleLowerCase(), 'MMMM', i);
            equalTest(tests[i][0].toLocaleUpperCase(), 'MMMM', i);
            equalTest(tests[i][1].toLocaleUpperCase(), 'MMMM', i);
        }
    });
    it('format', function () {
        var a = [
            ['dddd, MMMM Do YYYY, h:mm:ss', 'Søndag, Februar 14. 2010, 3:25:50'],
            ['ddd, h', 'Søn, 3'],
            ['M Mo MM MMMM MMM', '2 2. 02 Februar Feb'],
            ['YYYY YY', '2010 10'],
            ['D Do DD', '14 14. 14'],
            ['d do dddd ddd dd', '0 0. Søndag Søn Sø'],
            ['DDD DDDo DDDD', '45 45. 045'],
            ['w wo ww', '6 6. 06'],
            ['h hh', '3 03'],
            ['H HH', '15 15'],
            ['m mm', '25 25'],
            ['s ss', '50 50'],
            ['LTS', '15:25:50'],
            ['L', '14/02/2010'],
            ['LL', '14. Februar 2010'],
            ['LLL', '14. Februar 2010 15:25'],
            ['LLLL', 'Søndag d. 14. Februar 2010 kl. 15:25'],
            ['l', '14/2/2010'],
            ['ll', '14. Feb 2010'],
            ['lll', '14. Feb 2010 15:25'],
            ['llll', 'Søn d. 14. Feb 2010 kl. 15:25']
        ], b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)), i;
        for (i = 0; i < a.length; i++) {
            assertEq(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
        }
    });
    it('format month', function () {
        var expected = 'Januar Jan_Februar Feb_Marts Mar_April Apr_Maj Maj_Juni Jun_Juli Jul_August Aug_September Sep_Oktober Okt_November Nov_December Dec'.split('_'), i;
        for (i = 0; i < expected.length; i++) {
            assertEq(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
        }
    });
    it('format week', function () {
        var expected = 'Søndag Søn Sø_Mandag Man Ma_Tirsdag Tir Ti_Onsdag Ons On_Torsdag Tor To_Fredag Fre Fr_Lørdag Lør Lø'.split('_'), i;
        for (i = 0; i < expected.length; i++) {
            assertEq(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
        }
    });
    it('from', function () {
        var start = moment([2007, 1, 28]);
        assertEq(start.from(moment([2007, 1, 28]).add({ s: 44 }), true), 'få sekunder', '44 seconds = få sekunder');
        assertEq(start.from(moment([2007, 1, 28]).add({ s: 45 }), true), 'et minut', '45 seconds = et minut');
        assertEq(start.from(moment([2007, 1, 28]).add({ s: 89 }), true), 'et minut', '89 seconds = et minut');
        assertEq(start.from(moment([2007, 1, 28]).add({ s: 90 }), true), '2 minutter', '90 seconds = 2 minutter');
        assertEq(start.from(moment([2007, 1, 28]).add({ m: 44 }), true), '44 minutter', '44 minutes = 44 minutter');
        assertEq(start.from(moment([2007, 1, 28]).add({ m: 45 }), true), 'en time', '45 minutes = en time');
        assertEq(start.from(moment([2007, 1, 28]).add({ m: 89 }), true), 'en time', '89 minutes = en time');
        assertEq(start.from(moment([2007, 1, 28]).add({ m: 90 }), true), '2 timer', '90 minutes = 2 timer');
        assertEq(start.from(moment([2007, 1, 28]).add({ h: 5 }), true), '5 timer', '5 hours = 5 timer');
        assertEq(start.from(moment([2007, 1, 28]).add({ h: 21 }), true), '21 timer', '21 hours = 21 timer');
        assertEq(start.from(moment([2007, 1, 28]).add({ h: 22 }), true), 'en dag', '22 hours = en dag');
        assertEq(start.from(moment([2007, 1, 28]).add({ h: 35 }), true), 'en dag', '35 hours = en dag');
        assertEq(start.from(moment([2007, 1, 28]).add({ h: 36 }), true), '2 dage', '36 hours = 2 dage');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 1 }), true), 'en dag', '1 day = en dag');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 5 }), true), '5 dage', '5 days = 5 dage');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 25 }), true), '25 dage', '25 days = 25 dage');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 26 }), true), 'en måned', '26 days = en måned');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 30 }), true), 'en måned', '30 days = en måned');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 43 }), true), 'en måned', '43 days = en måned');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 46 }), true), '2 måneder', '46 days = 2 måneder');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 74 }), true), '2 måneder', '75 days = 2 måneder');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 76 }), true), '3 måneder', '76 days = 3 måneder');
        assertEq(start.from(moment([2007, 1, 28]).add({ M: 1 }), true), 'en måned', '1 month = en måned');
        assertEq(start.from(moment([2007, 1, 28]).add({ M: 5 }), true), '5 måneder', '5 months = 5 måneder');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 345 }), true), 'et år', '345 days = et år');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 548 }), true), '2 år', '548 days = 2 år');
        assertEq(start.from(moment([2007, 1, 28]).add({ y: 1 }), true), 'et år', '1 year = et år');
        assertEq(start.from(moment([2007, 1, 28]).add({ y: 5 }), true), '5 år', '5 years = 5 år');
    });
    it('suffix', function () {
        assertEq(moment(30000).from(0), 'om få sekunder', 'prefix');
        assertEq(moment(0).from(30000), 'få sekunder siden', 'suffix');
    });
    it('now from now', function () {
        assertEq(moment().fromNow(), 'få sekunder siden', 'now from now should display as in the past');
    });
    it('fromNow', function () {
        assertEq(moment().add({ s: 30 }).fromNow(), 'om få sekunder', 'om få sekunder');
        assertEq(moment().add({ d: 5 }).fromNow(), 'om 5 dage', 'om 5 dage');
    });
    it('calendar day', function () {
        var a = moment().hours(12).minutes(0).seconds(0);
        assertEq(moment(a).calendar(), 'i dag kl. 12:00', 'Today at 12:00');
        assertEq(moment(a).add({ m: 25 }).calendar(), 'i dag kl. 12:25', 'Now plus 25 min');
        assertEq(moment(a).add({ h: 1 }).calendar(), 'i dag kl. 13:00', 'Now plus 1 hour');
        assertEq(moment(a).add({ d: 1 }).calendar(), 'i morgen kl. 12:00', 'tomorrow at the same time');
        assertEq(moment(a).subtract({ h: 1 }).calendar(), 'i dag kl. 11:00', 'Now minus 1 hour');
        assertEq(moment(a).subtract({ d: 1 }).calendar(), 'i går kl. 12:00', 'yesterday at the same time');
    });
    it('calendar next week', function () {
        var i, m;
        for (i = 2; i < 7; i++) {
            m = moment().add({ d: i });
            assertEq(m.calendar(), m.format('[på] dddd [kl.] LT'), 'Today + ' + i + ' days current time');
            m.hours(0).minutes(0).seconds(0).milliseconds(0);
            assertEq(m.calendar(), m.format('[på] dddd [kl.] LT'), 'Today + ' + i + ' days beginning of day');
            m.hours(23).minutes(59).seconds(59).milliseconds(999);
            assertEq(m.calendar(), m.format('[på] dddd [kl.] LT'), 'Today + ' + i + ' days end of day');
        }
    });
    it('calendar last week', function () {
        var i, m;
        for (i = 2; i < 7; i++) {
            m = moment().subtract({ d: i });
            assertEq(m.calendar(), m.format('[i] dddd[s kl.] LT'), 'Today - ' + i + ' days current time');
            m.hours(0).minutes(0).seconds(0).milliseconds(0);
            assertEq(m.calendar(), m.format('[i] dddd[s kl.] LT'), 'Today - ' + i + ' days beginning of day');
            m.hours(23).minutes(59).seconds(59).milliseconds(999);
            assertEq(m.calendar(), m.format('[i] dddd[s kl.] LT'), 'Today - ' + i + ' days end of day');
        }
    });
    it('calendar all else', function () {
        var weeksAgo = moment().subtract({ w: 1 }), weeksFromNow = moment().add({ w: 1 });
        assertEq(weeksAgo.calendar(), weeksAgo.format('L'), '1 week ago');
        assertEq(weeksFromNow.calendar(), weeksFromNow.format('L'), 'in 1 week');
        weeksAgo = moment().subtract({ w: 2 });
        weeksFromNow = moment().add({ w: 2 });
        assertEq(weeksAgo.calendar(), weeksAgo.format('L'), '2 weeks ago');
        assertEq(weeksFromNow.calendar(), weeksFromNow.format('L'), 'in 2 weeks');
    });
    it('weeks year starting sunday formatted', function () {
        assertEq(moment([2012, 0, 1]).format('w ww wo'), '52 52 52.', 'Jan  1 2012 should be week 52');
        assertEq(moment([2012, 0, 2]).format('w ww wo'), '1 01 1.', 'Jan  2 2012 should be week 1');
        assertEq(moment([2012, 0, 8]).format('w ww wo'), '1 01 1.', 'Jan  8 2012 should be week 1');
        assertEq(moment([2012, 0, 9]).format('w ww wo'), '2 02 2.', 'Jan  9 2012 should be week 2');
        assertEq(moment([2012, 0, 15]).format('w ww wo'), '2 02 2.', 'Jan 15 2012 should be week 2');
    });
});
//# sourceMappingURL=da.spec.js.map