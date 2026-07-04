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
          Modell
          <input className={inputClass} name="carModel" required placeholder="Például Skoda Octavia" />
        </label>
        <label>
          Szín
          <input className={inputClass} name="carColor" required placeholder="Például fekete" />
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
            <option>Normál</option>
            <option>Hibás</option>
            <option>Sérült</option>
            <option>Forgalomból kivont</option>
          </select>
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
          <strong>Modul / adat fájl feltöltése</strong>
          <span>Opcionális adatlap, PDF, TXT vagy kép.</span>
          <input name="dataFiles" type="file" multiple />
        </label>
        <label>
          Autó adatok
          <textarea className={inputClass} name="carData" rows={5} placeholder="További adatok, ha vannak." />
        </label>
        <label>
          Problémák leírása
          <textarea className={inputClass} name="problems" rows={5} placeholder="Hibák, sérülések, problémák." />
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
