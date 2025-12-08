import React from 'react';
import { Icons, COMPANY_INFO } from '../constants';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'impressum' | 'datenschutz' | 'agb' | null;
}

const LegalModals: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen || !type) return null;

  const renderContent = () => {
    switch (type) {
      case 'impressum':
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Impressum</h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>Angaben gemäß gesetzlichen Anforderungen:</strong></p>
              <p>
                {COMPANY_INFO.name}<br />
                {COMPANY_INFO.address}<br />
                {COMPANY_INFO.city}<br />
                Schweiz
              </p>
              <p>
                <strong>Kontakt:</strong><br />
                Telefon: {COMPANY_INFO.phone}<br />
                E-Mail: {COMPANY_INFO.email}
              </p>
              <p>
                <strong>Vertretungsberechtigte Person:</strong><br />
                Herr Kumar, Geschäftsleiter
              </p>
              <p>
                <strong>Haftungsausschluss:</strong><br />
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </div>
          </>
        );
      case 'datenschutz':
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Datenschutzerklärung</h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>1. Datenschutz auf einen Blick</strong></p>
              <p>
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p><strong>2. Erhebung und Speicherung personenbezogener Daten</strong></p>
              <p>
                Wenn Sie unsere Webseite nutzen, werden automatisch Informationen allgemeiner Natur erfasst (Server-Logfiles). Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden die von Ihnen gemachten Angaben zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.
              </p>
              <p><strong>3. Weitergabe von Daten</strong></p>
              <p>
                Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt.
              </p>
              <p><strong>4. Ihre Rechte</strong></p>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
              </p>
            </div>
          </>
        );
      case 'agb':
        return (
          <>
            <h2 className="text-2xl font-bold mb-4">Allgemeine Geschäftsbedingungen (AGB)</h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>1. Geltungsbereich</strong></p>
              <p>
                Für die Geschäftsbeziehung zwischen Kumar Immobilien und dem Kunden gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Bestellung gültigen Fassung.
              </p>
              <p><strong>2. Vertragsgegenstand</strong></p>
              <p>
                Gegenstand des Vertrages ist der Nachweis oder die Vermittlung von Immobilien (Kauf, Verkauf, Miete).
              </p>
              <p><strong>3. Haftung</strong></p>
              <p>
                Die von uns weitergegebenen Objektinformationen, Unterlagen, Pläne etc. stammen vom Veräußerer bzw. Vermieter. Eine Haftung für die Richtigkeit oder Vollständigkeit der Angaben übernehmen wir daher nicht.
              </p>
              <p><strong>4. Provision</strong></p>
              <p>
                Unser Anspruch auf die Provision entsteht, sobald aufgrund unseres Nachweises oder unserer Vermittlung ein Vertrag zustande kommt.
              </p>
              <p><strong>5. Gerichtsstand</strong></p>
              <p>
                Gerichtsstand ist der Sitz von Kumar Immobilien, soweit gesetzlich zulässig.
              </p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl">
        <div className="p-4 border-b border-gray-100 flex justify-end">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Icons.X />
          </button>
        </div>
        <div className="p-8 overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default LegalModals;