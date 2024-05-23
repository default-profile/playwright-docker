import cors from 'cors';
import express from 'express';
import { firefox } from 'playwright';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('(Update 5) Server is up & running...'));

app.get('/health', (req, res) => res.send('Server is healthy!'));

app.get('/example', async (req, res) => {
    try {
        const browser = await firefox.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://example.com');
        const html = await page.content();
        await page.close();
        await context.close();
        await browser.close();
        res.send(html);
    } catch (error) {
        res.json(error);
    }
});

export default app;
