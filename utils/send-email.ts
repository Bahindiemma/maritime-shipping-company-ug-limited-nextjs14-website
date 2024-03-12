import { FormData } from "@/components/contact-form";
import { QuoteFormData } from "@/lib/interface";

export function sendEmail(data: FormData) {
    const apiEndpoint = 'https://www.maritimeshipping-uganda.com/api/email';
  
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert(err);
      });
  }
export function sendQuote(data: QuoteFormData) {
    const apiEndpoint = 'https://www.maritimeshipping-uganda.com/api/quote';
  
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert(err);
      });
  }