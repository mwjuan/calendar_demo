const Koa = require('koa');
const send = require('koa-send');

const app = new Koa();

app.use(async ctx => {
    const path = './calendar.ics';
    ctx.set('Content-Type', 'text/calendar; charset=utf-8; method=REQUEST; name=invite.ics; component=VEVENT')
    ctx.set('Content-Disposition', 'attachment; filename=invite.ics')
    ctx.set('Content-Transfer-Encoding', 'Base64')
    ctx.set('Content-class', 'urn:content-classes:calendarmessage')
    ctx.set('Content-Transfer-Encoding', '7bit')
    await send(ctx, path);
});

app.listen(9000);
