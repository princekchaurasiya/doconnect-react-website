# Mumbai home visit (Laravel + Inertia + React)

Single **Laravel** application at the repository root with:

- **Inertia.js** bridging Laravel routes to **React** pages in `resources/js/Pages`
- **Filament** admin at `/admin` (not wrapped by Inertia — middleware is scoped to public routes only)
- Optional **JSON API** under `/api/v1/*` for headless clients (same repositories / resources as before)

The old standalone `frontend/` folder has been **removed**; all UI lives in `resources/js`.

**Production:** see **[PRODUCTION.md](PRODUCTION.md)** (server packages, database, `.env`, Nginx, queues, cron).

## Requirements

- **PHP 8.4+** (`composer.json`). Install **`php8.4-cli`** (or newer 8.4.x) from your OS; this repo’s **`mise.toml`** does not install PHP via mise (see [PHP 8.4+](#php-84-this-directory)).
- **Node.js**: Vite 5 + Tailwind 3 are pinned for **Node 18+** compatibility (upgrade to Node 20+ if you want newer Vite/Tailwind stacks)

### PHP 8.4+ (this directory)

This repo’s **`mise.toml`** sets **`disable_tools = ["php"]`** so [mise](https://mise.jdx.dev/) does **not** install or shim PHP here. That avoids the old **static prebuilt** PHP (`ubi:adwinying/php`, static-php-cli), which can crash with **SIGILL** on some CPUs.

**Install PHP 8.4 from your OS** (required), for example on Ubuntu:

```bash
sudo apt update
sudo apt install php8.4-cli php8.4-xml php8.4-curl php8.4-mbstring php8.4-mysql php8.4-zip php8.4-bcmath php8.4-intl php8.4-sqlite3 php8.4-gd php8.4-pgsql php8.4-readline
php -v   # should report 8.4.x
```

#### Permanent setup (optional, for other mise-managed tools)

If you use mise for Node or other tools, add this to **`~/.bashrc`** (after any `PATH=...` line that includes `~/.local/bin`), then **open a new terminal** or run `source ~/.bashrc`:

```bash
export PATH="$HOME/.local/bin:$PATH"
if command -v mise >/dev/null 2>&1; then
  eval "$(mise activate bash)"
fi
```

With that in place, **`cd` into this project** keeps **distro `php`** on your `PATH` (mise does not override it here). Outside this directory, your global mise tools (if any) still apply.

**One-time per clone:** from the project root:

```bash
cd /path/to/mumbai-home-visit
mise trust .          # if mise asks you to trust this repo
mise install          # installs any other tools from mise.toml (PHP is skipped)
```

#### Daily commands

```bash
cd /path/to/mumbai-home-visit
composer install
php artisan serve
```

Leave that terminal open. In your browser open **http://127.0.0.1:8000** (default port). If port 8000 is busy, Laravel prints another URL (e.g. **http://127.0.0.1:8001**).

- **Admin:** http://127.0.0.1:8000/admin (same host/port as above)

**Without mise:** same commands work if **`php -v`** is **8.4+** on your `PATH`.

**Editor (Cursor / VS Code):** use a **Bash** integrated terminal (not `sh`) so `~/.bashrc` runs. Point PHP analysis at **`php8.4`** or **`/usr/bin/php`** if needed.

## Local development

```bash
cd /path/to/mumbai-home-visit
mise install          # first time / after tool changes
composer install
cp .env.example .env   # first time only — configure DB
php artisan key:generate
php artisan migrate
php artisan db:seed
php artisan storage:link
composer run dev       # optional: serve + Vite + queue + pail together
```

Or use two terminals: **`php artisan serve`** and **`npm run dev`**.

## Project layout (high level)

| Area | Path |
|------|------|
| Inertia React pages | `resources/js/Pages` |
| Shared UI components | `resources/js/Components` |
| Layouts | `resources/js/Layouts` |
| Web controllers | `app/Http/Controllers/Web` |
| API (optional) | `routes/api.php`, `App\Http\Controllers\Api\V1` |
| CMS (Filament) | `app/Filament` |

## Troubleshooting

### Composer: “Your Composer dependencies require a PHP version >= 8.4.0”

Composer is using a **PHP older than 8.4**. Fix one of:

- Install **`php8.4-cli`** and ensure **`php -v`** reports 8.4+ in the same terminal you run **`composer`** (see [PHP 8.4+](#php-84-this-directory)).
- In **Cursor / VS Code**, set the integrated terminal default profile to **bash** so `~/.bashrc` loads if you rely on PATH tweaks.

### PHP / CLI crashes with **SIGILL**

That is almost always an **incompatible PHP binary** (often a static or prebuilt build), not Laravel code. **Use distro PHP** (`apt install php8.4-cli`, …) and ensure **`which php`** points at **`/usr/bin/php`** (or another non-static build). This project intentionally avoids mise-managed PHP in **`mise.toml`** for that reason.

### Chrome **Aw, Snap!** — **Error code: SIGILL** on `http://127.0.0.1:*`

That message is from **Google Chrome** (renderer or GPU process), not from PHP. Your Laravel app is unlikely to be the cause unless the tab never loads in any browser.

1. **Confirm the server responds** (with `php artisan serve` running):  
   `curl -sS -o /dev/null -w '%{http_code}\n' http://127.0.0.1:8001/`  
   If you get **200** (or 302), the backend is fine; the crash is in Chrome.

2. **Try Firefox** (or another browser). If the site works there, treat it as a Chrome/GPU issue on your machine.

3. In Chrome: **Settings → System** → turn **off** **Use graphics acceleration when available** → relaunch.

4. Or start Chrome with GPU disabled once:  
   `google-chrome --disable-gpu`  
   (command name may be `chromium` or `google-chrome-stable` on Linux.)

5. Update **Chrome** and **Intel/AMD GPU drivers** (e.g. Latitude laptops often use Intel integrated graphics).

**Brave** uses the same engine as Chrome. Use the same steps: **Brave → Settings → System** → disable hardware acceleration, or launch with **`brave-browser --disable-gpu`**. A tab that shows **SIGILL** / **Aw, Snap!** is the **browser process** dying; Laravel **`try/catch`** and **`storage/logs/laravel.log`** only help with **server-side** PHP errors—they cannot intercept a crashed browser tab.

If you need to confirm the app is fine, use **`curl -sS -o /dev/null -w '%{http_code}\n' http://127.0.0.1:8001/`** or open **`/up`**; if that returns **200** while the tab crashes, fix the **browser/GPU** side, not PHP.

### `could not find driver` (SQLite)

PHP is missing the **PDO SQLite** extension for the **same binary** that runs `artisan serve` / PHP-FPM. Install it for PHP 8.4, for example on Ubuntu:

```bash
sudo apt install php8.4-sqlite3
php8.4 -m | grep -i sqlite   # should include pdo_sqlite
```

Then run the app with **that** PHP (`php8.4 artisan serve`). Your default `php` (8.2) will not pick up extensions installed only for another version.

### `Call to undefined method ReflectionProperty::isVirtual()`

The web request is being handled by **PHP older than 8.4** (often the default `php` 8.2). Symfony 8’s error renderer needs 8.4+. Run the dev server and workers with **PHP 8.4** (see [PHP 8.4+](#php-84-this-directory) above).

## CORS

Only needed for **external** callers of `/api/*`. Set `CORS_ALLOWED_ORIGINS` in `.env` when the SPA was separate; Inertia pages do not need CORS for same-origin browsing.
# doconnect-react-website
