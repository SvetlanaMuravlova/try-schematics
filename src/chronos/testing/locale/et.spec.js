import { assertEq } from '../test-helpers';
import { moment } from '../chain';
import { etLocale } from '../../i18n/et';
describe('locale: et', () => {
    beforeAll(() => {
        moment.locale('et', etLocale);
    });
    afterAll(() => {
        moment.locale('en');
    });
    it('parse', function () {
        var _tests = 'jaanuar jaan_veebruar veebr_märts märts_aprill apr_mai mai_juuni juuni_juuli juuli_august aug_september sept_oktoober okt_november nov_detsember dets'.split('_'), i;
        function equalTest(input, mmm, i) {
            assertEq(moment(input, mmm).month(), i, input + ' should be month ' + (i + 1));
        }
        let tests = [];
        for (let i = 0; i < 6; i++) {
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
            ['dddd, MMMM Do YYYY, h:mm:ss', 'pühapäev, veebruar 14. 2010, 3:25:50'],
            ['ddd, h', 'P, 3'],
            ['M Mo MM MMMM MMM', '2 2. 02 veebruar veebr'],
            ['YYYY YY', '2010 10'],
            ['D Do DD', '14 14. 14'],
            ['d do dddd ddd dd', '0 0. pühapäev P P'],
            ['DDD DDDo DDDD', '45 45. 045'],
            ['w wo ww', '6 6. 06'],
            ['h hh', '3 03'],
            ['H HH', '15 15'],
            ['m mm', '25 25'],
            ['s ss', '50 50'],
            ['LTS', '15:25:50'],
            ['L', '14.02.2010'],
            ['LL', '14. veebruar 2010'],
            ['LLL', '14. veebruar 2010 15:25'],
            ['LLLL', 'pühapäev, 14. veebruar 2010 15:25'],
            ['l', '14.2.2010'],
            ['ll', '14. veebr 2010'],
            ['lll', '14. veebr 2010 15:25'],
            ['llll', 'P, 14. veebr 2010 15:25']
        ], b = moment(new Date(2010, 1, 14, 15, 25, 50, 125)), i;
        for (i = 0; i < a.length; i++) {
            assertEq(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
        }
    });
    it('format month', function () {
        var expected = 'jaanuar jaan_veebruar veebr_märts märts_aprill apr_mai mai_juuni juuni_juuli juuli_august aug_september sept_oktoober okt_november nov_detsember dets'.split('_'), i;
        for (i = 0; i < expected.length; i++) {
            assertEq(moment([2011, i, 1]).format('MMMM MMM'), expected[i], expected[i]);
        }
    });
    it('format week', function () {
        var expected = 'pühapäev P P_esmaspäev E E_teisipäev T T_kolmapäev K K_neljapäev N N_reede R R_laupäev L L'.split('_'), i;
        for (i = 0; i < expected.length; i++) {
            assertEq(moment([2011, 0, 2 + i]).format('dddd ddd dd'), expected[i], expected[i]);
        }
    });
    it('from', function () {
        var start = moment([2007, 1, 28]);
        assertEq(start.from(moment([2007, 1, 28]).add({ s: 44 }), true), 'paar sekundit', '44 seconds = a few seconds');
        assertEq(start.from(moment([2007, 1, 28]).add({ s: 45 }), true), 'üks minut', '45 seconds = a minute');
        assertEq(start.from(moment([2007, 1, 28]).add({ s: 89 }), true), 'üks minut', '89 seconds = a minute');
        assertEq(start.from(moment([2007, 1, 28]).add({ s: 90 }), true), '2 minutit', '90 seconds = 2 minutes');
        assertEq(start.from(moment([2007, 1, 28]).add({ m: 44 }), true), '44 minutit', '44 minutes = 44 minutes');
        assertEq(start.from(moment([2007, 1, 28]).add({ m: 45 }), true), 'üks tund', '45 minutes = an hour');
        assertEq(start.from(moment([2007, 1, 28]).add({ m: 89 }), true), 'üks tund', '89 minutes = an hour');
        assertEq(start.from(moment([2007, 1, 28]).add({ m: 90 }), true), '2 tundi', '90 minutes = 2 hours');
        assertEq(start.from(moment([2007, 1, 28]).add({ h: 5 }), true), '5 tundi', '5 hours = 5 hours');
        assertEq(start.from(moment([2007, 1, 28]).add({ h: 21 }), true), '21 tundi', '21 hours = 21 hours');
        assertEq(start.from(moment([2007, 1, 28]).add({ h: 22 }), true), 'üks päev', '22 hours = a day');
        assertEq(start.from(moment([2007, 1, 28]).add({ h: 35 }), true), 'üks päev', '35 hours = a day');
        assertEq(start.from(moment([2007, 1, 28]).add({ h: 36 }), true), '2 päeva', '36 hours = 2 days');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 1 }), true), 'üks päev', '1 day = a day');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 5 }), true), '5 päeva', '5 days = 5 days');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 25 }), true), '25 päeva', '25 days = 25 days');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 26 }), true), 'üks kuu', '26 days = a month');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 30 }), true), 'üks kuu', '30 days = a month');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 43 }), true), 'üks kuu', '43 days = a month');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 46 }), true), '2 kuud', '46 days = 2 months');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 74 }), true), '2 kuud', '75 days = 2 months');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 76 }), true), '3 kuud', '76 days = 3 months');
        assertEq(start.from(moment([2007, 1, 28]).add({ M: 1 }), true), 'üks kuu', '1 month = a month');
        assertEq(start.from(moment([2007, 1, 28]).add({ M: 5 }), true), '5 kuud', '5 months = 5 months');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 345 }), true), 'üks aasta', '345 days = a year');
        assertEq(start.from(moment([2007, 1, 28]).add({ d: 548 }), true), '2 aastat', '548 days = 2 years');
        assertEq(start.from(moment([2007, 1, 28]).add({ y: 1 }), true), 'üks aasta', '1 year = a year');
        assertEq(start.from(moment([2007, 1, 28]).add({ y: 5 }), true), '5 aastat', '5 years = 5 years');
    });
    it('suffix', function () {
        assertEq(moment(30000).from(0), 'mõne sekundi pärast', 'prefix');
        assertEq(moment(0).from(30000), 'mõni sekund tagasi', 'suffix');
    });
    it('now from now', function () {
        assertEq(moment().fromNow(), 'mõni sekund tagasi', 'now from now should display as in the past');
    });
    it('fromNow', function () {
        assertEq(moment().add({ s: 30 }).fromNow(), 'mõne sekundi pärast', 'in a few seconds');
        assertEq(moment().add({ d: 5 }).fromNow(), '5 päeva pärast', 'in 5 days');
    });
    it('calendar day', function () {
        var a = moment().hours(12).minutes(0).seconds(0);
        assertEq(moment(a).calendar(), 'Täna, 12:00', 'Today at 12:00');
        assertEq(moment(a).add({ m: 25 }).calendar(), 'Täna, 12:25', 'Now plus 25 min');
        assertEq(moment(a).add({ h: 1 }).calendar(), 'Täna, 13:00', 'Now plus 1 hour');
        assertEq(moment(a).add({ d: 1 }).calendar(), 'Homme, 12:00', 'tomorrow at the same time');
        assertEq(moment(a).subtract({ h: 1 }).calendar(), 'Täna, 11:00', 'Now minus 1 hour');
        assertEq(moment(a).subtract({ d: 1 }).calendar(), 'Eile, 12:00', 'yesterday at the same time');
    });
    it('calendar next week', function () {
        var i, m;
        for (i = 2; i < 7; i++) {
            m = moment().add({ d: i });
            assertEq(m.calendar(), m.format('[Järgmine] dddd LT'), 'Today + ' + i + ' days current time');
            m.hours(0).minutes(0).seconds(0).milliseconds(0);
            assertEq(m.calendar(), m.format('[Järgmine] dddd LT'), 'Today + ' + i + ' days beginning of day');
            m.hours(23).minutes(59).seconds(59).milliseconds(999);
            assertEq(m.calendar(), m.format('[Järgmine] dddd LT'), 'Today + ' + i + ' days end of day');
        }
    });
    it('calendar last week', function () {
        var i, m;
        for (i = 2; i < 7; i++) {
            m = moment().subtract({ d: i });
            assertEq(m.calendar(), m.format('[Eelmine] dddd LT'), 'Today - ' + i + ' days current time');
            m.hours(0).minutes(0).seconds(0).milliseconds(0);
            assertEq(m.calendar(), m.format('[Eelmine] dddd LT'), 'Today - ' + i + ' days beginning of day');
            m.hours(23).minutes(59).seconds(59).milliseconds(999);
            assertEq(m.calendar(), m.format('[Eelmine] dddd LT'), 'Today - ' + i + ' days end of day');
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
//# sourceMappingURL=et.spec.js.map