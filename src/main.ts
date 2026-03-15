import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const port = Number(configService.get<string>('PORT') ?? 3000);
    const host = configService.get<string>('HOST') ?? '0.0.0.0';

    await app.listen(port, host);
    console.log(`wavehub-server listening on http://${host}:${port}`);
}

void bootstrap();
