import { ArrowRight, UploadCloud } from "lucide-react";

const inputClass = "field-control";

export function SellerForm() {
  return (
    <form className="seller-form" action="/api/inquiries" method="post" encType="multipart/form-data">
      <section className="form-card">
        <h2>Eladó adatai</h2>
        <label>
          Név
          <input className={inputClass} name="sellerName" placeholder="Teljes név" />
        </label>
        <label>
          Telefon
          <input className={inputClass} name="sellerPhone" type="tel" placeholder="+36..." />
        </label>
        <label>
          E-mail
          <input className={inputClass} name="sellerEmail" type="email" placeholder="email@pelda.hu" />
        </label>
        <p className="field-help">Telefon vagy e-mail megadása kötelező.</p>
      </section>

      <section className="form-card">
        <h2>Autó adatai</h2>
        <label>
          Márka
          <input className={inputClass} name="carBrand" required placeholder="Például Toyota" />
        </label>
        <label>
          Modell
          <input className={inputClass} name="carModel" required placeholder="Például Octavia, Astra, Corolla" />
        </label>
        <label>
          Évjárat
          <input className={inputClass} name="carYear" inputMode="numeric" placeholder="Például 2018" />
        </label>
        <label>
          Futott km
          <input className={inputClass} name="mileage" inputMode="numeric" placeholder="Például 160000" />
        </label>
        <label>
          Üzemanyag
          <select className={inputClass} name="fuel" defaultValue="">
            <option value="">Válasszon</option>
            <option>Benzin</option>
            <option>Dízel</option>
            <option>Hibrid</option>
            <option>Elektromos</option>
            <option>Gáz</option>
            <option>Egyéb</option>
          </select>
        </label>
        <label>
          Váltó
          <select className={inputClass} name="transmission" defaultValue="">
            <option value="">Válasszon</option>
            <option>Manuális</option>
            <option>Automata</option>
          </select>
        </label>
        <label>
          Állapot
          <select className={inputClass} name="condition" defaultValue="">
            <option value="">Válasszon</option>
            <option>Megkímélt</option>
            <option>Normál használt</option>
            <option>Hibás</option>
            <option>Motorhibás</option>
            <option>Sérült</option>
            <option>Nem indul</option>
            <option>Forgalomból kivont</option>
          </select>
        </label>
        <label>
          Szín
          <input className={inputClass} name="carColor" required placeholder="Például fekete" />
        </label>
        <label>
          Autó helye
          <input className={inputClass} name="location" required placeholder="Például Budapest XI. kerület" />
        </label>
        <label>
          Irányár, ha van
          <input className={inputClass} name="askingPrice" placeholder="Például 1 200 000 Ft" />
        </label>
      </section>

      <section className="form-card upload-card">
        <h2>Képek és adatok</h2>
        <label className="file-drop">
          <UploadCloud size={34} />
          <strong>Autó képek feltöltése</strong>
          <span>JPG, PNG vagy WEBP. Legalább egy kép kell.</span>
          <input name="carPhotos" type="file" accept="image/*" multiple required />
        </label>
        <label className="file-drop">
          <UploadCloud size={34} />
          <strong>Dokumentum vagy adatfájl feltöltése</strong>
          <span>Opcionális adatlap, PDF, TXT vagy kép.</span>
          <input name="dataFiles" type="file" multiple />
        </label>
        <label>
          Ismert hibák
          <textarea
            className={inputClass}
            name="problems"
            rows={5}
            placeholder="Motorhiba, váltóhiba, sérülés, lejárt műszaki vagy egyéb probléma."
          />
        </label>
        <label>
          További adatok
          <textarea className={inputClass} name="carData" rows={5} placeholder="Felszereltség, szerviz, papírok, kulcsok." />
        </label>
      </section>

      <div className="form-submit-row">
        <button className="gold-button" type="submit">
          Ajánlat kérése
          <ArrowRight size={18} />
        </button>
      </div>
    </form>
  );
}
