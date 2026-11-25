import React, { useEffect, useState } from 'react';
import { avatar, p1, p2, p5, p6, p7, p8, p10, p11, p12 } from './photos';

const UNITS = [
  { id: 'madalena', letter: 'A', name: 'Madalena', line1: 'R. José Bonifácio, 380 — Sala 101 (1º andar)', line2: 'Madalena, Recife — PE · CEP 50710-435', lat: -8.0475947, lon: -34.9063076, link: 'https://maps.app.goo.gl/7KDkghWg8v56bzFY9' },
  { id: 'boaviagem', letter: 'B', name: 'Boa Viagem', line1: 'R. Mamanguape, 216', line2: 'Boa Viagem, Recife — PE · CEP 51020-240', lat: -8.1155535, lon: -34.897736, link: 'https://maps.app.goo.gl/GaEM3ii2XMLCKkdB8' },
  { id: 'espinheiro', letter: 'C', name: 'Espinheiro', line1: 'Galeria Mário Melo, R. da Hora, 456', line2: 'Espinheiro, Recife — PE · CEP 50050-290', lat: -8.0450824, lon: -34.8939035, link: 'https://maps.app.goo.gl/5S7pNBshmEKYK61A9' },
];

const TITLE = 'Dona Nita'.split('');

export function App() {
    const [unit, setUnit] = useState(0);
    const u = UNITS[unit];
    useEffect(() => {
        const HOST = '.svc-card, .info-card, .unit, .gallery figure, .bf-inner, .rating, .map-panel, .section, .hero';
        const onTap = (ev: PointerEvent) => {
            const t = ev.target as HTMLElement;
            if (t.closest('a, summary, button, iframe, .nav')) return;
            const host = t.closest(HOST) as HTMLElement | null;
            if (!host) return;
            const r = host.getBoundingClientRect();
            const rip = document.createElement('span');
            rip.className = 'tap-ripple';
            const size = Math.max(r.width, r.height) * 1.1;
            rip.style.cssText = `width:${size}px;height:${size}px;left:${ev.clientX - r.left - size / 2}px;top:${ev.clientY - r.top - size / 2}px`;
            host.appendChild(rip);
            setTimeout(() => rip.remove(), 900);
            const card = host.matches('.section, .hero') ? host.querySelector('h2, .hero-avatar') : host;
            if (card) {
                card.classList.remove('tap-pop');
                void (card as HTMLElement).offsetWidth;
                card.classList.add('tap-pop');
            }
        };
        document.addEventListener('pointerdown', onTap);
        return () => document.removeEventListener('pointerdown', onTap);
    }, []);
    useEffect(() => {
        const els = document.querySelectorAll('.dn-reveal');
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
        }, { threshold: 0.08 });
        els.forEach((el) => io.observe(el));
        document.querySelectorAll('.dn-faq-list details').forEach((d) => {
            d.addEventListener('toggle', () => {
                if (d.open) d.querySelector('p')?.animate(
                    [{ opacity: 0, transform: 'translateY(-6px)' }, { opacity: 1, transform: 'none' }],
                    { duration: 350, easing: 'cubic-bezier(.2,.8,.25,1)' }
                );
            });
        });
    }, []);

    return <div className="dn-site">


<nav className="nav" id="nav">
  <span className="nav-brand">DONA NITA</span>
  <div className="nav-links">
    <a href="#servicos">Serviços</a>
    <a href="#blackfriday">Black Friday</a>
    <a href="#galeria">Galeria</a>
    <a href="#unidades">Unidades</a>
  </div>
  <a className="nav-cta" href="https://wa.me/message/KAWXL6243Q2IN1" target="_blank" rel="noopener">Agendar</a>
</nav>

<header className="hero">
  <div className="hero-bg" style={{ backgroundImage: `url(${p6})` }}></div>
  <div className="hero-veil"></div>
  <div className="hero-inner">
    <img className="hero-avatar" src={avatar} alt="Dona Nita Esmalteria" />
    <p className="hero-kicker dn-dn-reveal">ESMALTERIA • RECIFE</p>
    <h1 className="dn-dn-reveal d1">Dona Nita</h1>
    <p className="hero-sub dn-reveal d2">Especialistas em gel com naturalidade ✨</p>
    <a className="btn btn-gold dn-reveal d3" href="https://wa.me/message/KAWXL6243Q2IN1" target="_blank" rel="noopener">Agendar meu horário</a>
    <p className="hero-note dn-reveal d4">Atendimentos com hora marcada • Madalena · Boa Viagem · Espinheiro</p>
  </div>
</header>

<div className="marquee" aria-hidden={true}>
  <div className="marquee-track">
    <span>Alongamento em gel</span><i>✦</i><span>Fibra de vidro</span><i>✦</i><span>Spa dos pés</span><i>✦</i><span>Esmaltação em gel</span><i>✦</i><span>Manicure & Pedicure</span><i>✦</i><span>Acrílico</span><i>✦</i>
    <span>Alongamento em gel</span><i>✦</i><span>Fibra de vidro</span><i>✦</i><span>Spa dos pés</span><i>✦</i><span>Esmaltação em gel</span><i>✦</i><span>Manicure & Pedicure</span><i>✦</i><span>Acrílico</span><i>✦</i>
  </div>
</div>

<section className="section intro">
  <p className="kicker dn-reveal">Bem-vinda</p>
  <h2 className="dn-dn-reveal d1">Beleza em cada detalhe.</h2>
  <p className="lead dn-reveal d2">Três endereços em Recife, uma equipe apaixonada por unhas e um cuidado que se vê no acabamento. Escolha o serviço, chame no WhatsApp e pronto.</p>
  <div className="rating dn-reveal d3">
    <span className="stars">✦</span>
    <span><strong>21,5 mil</strong> seguidores no Instagram</span>
  </div>
</section>

<section className="section dark" id="servicos">
  <p className="kicker dn-reveal">Menu de serviços</p>
  <h2 className="dn-dn-reveal d1">Serviços & valores</h2>

  <div className="svc-grid">
    <article className="svc-card dn-reveal">
      <h3>Tradicional</h3>
      <ul>
        <li><span>Manicure</span><b>R$ 30</b></li>
        <li><span>Pedicure</span><b>R$ 35</b></li>
        <li><span>Pé + Mão</span><b>R$ 60</b></li>
        <li><span>Cutilagem</span><b>R$ 17</b></li>
        <li><span>Esmaltação</span><b>R$ 17</b></li>
      </ul>
    </article>

    <article className="svc-card dn-reveal d1">
      <h3>Spa dos pés</h3>
      <ul>
        <li><span>Spa basiquinho <small>(inclui pedicure)</small></span><b>R$ 70</b></li>
        <li><span>Spa fatal <small>(inclui pedicure)</small></span><b>R$ 80</b></li>
        <li><span>Spa Dona Nita <small>(inclui pedicure)</small></span><b>R$ 90</b></li>
      </ul>
    </article>

    <article className="svc-card svc-hi dn-reveal d2">
      <h3>Colocação</h3>
      <ul>
        <li><span>Unhas de estreia <small>natural em gel ou fibra de vidro, com cutilagem cortesia</small></span><b>R$ 180</b></li>
        <li><span>Nita experience <small>alongamento completo em gel ou fibra de vidro, com cor e cutilagem</small></span><b>R$ 200</b></li>
        <li><span>Acrílico do zero</span><b>R$ 220</b></li>
      </ul>
    </article>

    <article className="svc-card svc-hi dn-reveal">
      <h3>Manutenção</h3>
      <ul>
        <li><span>Renova Nita no tempo certo <small>até 20 dias, esmaltação em gel cortesia</small></span><b>R$ 120</b></li>
        <li><span>Renova Nita no seu tempo <small>21 dias, esmaltação em gel cortesia</small></span><b>R$ 140</b></li>
        <li><span>Começo do certo <small>vindo de outro espaço, esmaltação em gel cortesia</small></span><b>R$ 140</b></li>
        <li><span>Renova Nita acrílico</span><b>R$ 180</b></li>
        <li><span>Renova Nita reestreia <small>após 30 dias</small></span><b>R$ 180–200</b></li>
      </ul>
    </article>

    <article className="svc-card dn-reveal d1">
      <h3>Outros serviços</h3>
      <ul>
        <li><span>Esmaltação master <small>(inclui cutilagem)</small></span><b>R$ 110</b></li>
        <li><span>Esmaltação em gel <small>(inclui cutilagem)</small></span><b>R$ 70</b></li>
        <li><span>Reposição de unha</span><b>R$ 17</b></li>
        <li><span>Reposição canto da unha</span><b>R$ 5</b></li>
        <li><span>Remoção (alongamento)</span><b>R$ 50</b></li>
        <li><span>Remoção (esmaltação em gel)</span><b>R$ 10</b></li>
      </ul>
    </article>

    <article className="svc-card dn-reveal d2">
      <h3>Acabamentos</h3>
      <ul>
        <li><span>Alterar formato</span><b>R$ 30</b></li>
        <li><span>Decoração encapsulada</span><b>R$ 30</b></li>
        <li><span>Desenhos manuais</span><b>R$ 30</b></li>
        <li><span>Filha única</span><b>R$ 10</b></li>
        <li><span>Francesinha simples</span><b>R$ 5</b></li>
        <li><span>Francesinha encapsulada</span><b>R$ 15</b></li>
        <li><span>Diminuir alongamento</span><b>R$ 30</b></li>
      </ul>
    </article>
  </div>

  <p className="pay-note dn-reveal">Aceitamos pix e todos os cartões · Parcelamento em 2x com acréscimo de 5% sobre o total</p>
</section>

<section className="section bf" id="blackfriday">
  <div className="bf-inner">
    <p className="bf-tag dn-reveal">BLACK FRIDAY</p>
    <h2 className="dn-dn-reveal d1">Pacote Esmaltação Master</h2>
    <p className="bf-price dn-reveal d2">R$ 550</p>
    <p className="bf-desc dn-reveal d2">6 esmaltações master — uma economia de <strong>R$ 110</strong></p>
    <div className="bf-chips dn-reveal d3">
      <span>2x sem juros</span>
      <span>Válido por 6 meses</span>
    </div>
    <a className="btn btn-gold dn-reveal d3" href="https://wa.me/message/KAWXL6243Q2IN1" target="_blank" rel="noopener">Quero aproveitar</a>
  </div>
</section>

<section className="section" id="galeria">
  <p className="kicker dn-reveal">Nosso trabalho</p>
  <h2 className="dn-dn-reveal d1">Direto do nosso Instagram</h2>
  <div className="gallery">
    <figure className="dn-dn-reveal"><img src={p5} alt="Alongamento em gel" loading="lazy" /></figure>
    <figure className="dn-dn-reveal d1"><img src={p8} alt="Esmaltação glazed" loading="lazy" /></figure>
    <figure className="dn-dn-reveal d2"><img src={p1} alt="Unhas vermelhas" loading="lazy" /></figure>
    <figure className="dn-dn-reveal"><img src={p12} alt="Atendimento" loading="lazy" /></figure>
    <figure className="dn-dn-reveal d1"><img src={p2} alt="Nosso espaço" loading="lazy" /></figure>
    <figure className="dn-dn-reveal d2"><img src={p10} alt="Spa dos pés" loading="lazy" /></figure>
    <figure className="dn-dn-reveal"><img src={p7} alt="Cuidado em cada etapa" loading="lazy" /></figure>
    <figure className="dn-dn-reveal d1"><img src={p11} alt="Nova coleção de esmaltes" loading="lazy" /></figure>
  </div>
  <a className="text-link dn-reveal" href="https://www.instagram.com/donanita_esmalteria/" target="_blank" rel="noopener">@donanita_esmalteria →</a>
</section>

<section className="section dark" id="unidades">
  <p className="kicker dn-reveal">Onde estamos</p>
  <h2 className="dn-reveal d1">Três unidades em Recife</h2>
  <p className="units-lead dn-reveal d2">Toque em uma unidade para ver no mapa.</p>
  <div className="units-wrap dn-reveal d2">
    <div className="units">
      {UNITS.map((x, i) => (
        <button key={x.id} type="button" className={'unit' + (i === unit ? ' active' : '')} onClick={() => { setUnit(i); if (window.innerWidth <= 820) setTimeout(() => document.querySelector('.map-panel')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 60); }} aria-pressed={i === unit}>
          <span className="unit-pin" data-l={x.letter}></span>
          <span className="unit-body">
            <span className="unit-tag">Unidade</span>
            <strong>{x.name}</strong>
            <span className="unit-addr">{x.line1}<br />{x.line2}</span>
          </span>
        </button>
      ))}
    </div>
    <div className="map-panel">
      <div className="map-head">
        <span className="map-badge">{u.letter}</span>
        <div><b>Unidade {u.name}</b><small>{u.line1}</small></div>
      </div>
      <div className="map-frame">
        <iframe
          key={u.id}
          title={'Mapa da unidade ' + u.name}
          src={`https://maps.google.com/maps?q=${u.lat},${u.lon}&z=17&hl=pt-BR&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <a className="btn btn-gold map-open" href={u.link} target="_blank" rel="noopener">Abrir {u.name} no Google Maps</a>
    </div>
  </div>
</section>

<section className="section info">
  <p className="kicker dn-reveal">Antes da sua visita</p>
  <h2 className="dn-dn-reveal d1">Bom saber</h2>
  <div className="info-grid">
    <article className="info-card dn-reveal">
      <span className="info-num">01</span>
      <h3>Hora marcada</h3>
      <p>Os atendimentos são com agendamento. Chame no WhatsApp e escolha o melhor horário na unidade mais perto de você.</p>
    </article>
    <article className="info-card dn-reveal d1">
      <span className="info-num">02</span>
      <h3>Pagamento facilitado</h3>
      <p>Aceitamos pix e todos os cartões. Parcelamento em 2x com acréscimo de 5% sobre o valor total.</p>
    </article>
    <article className="info-card dn-reveal d2">
      <span className="info-num">03</span>
      <h3>Manutenção em dia</h3>
      <p>No Renova Nita dentro do prazo, a esmaltação em gel é cortesia. Passou de 30 dias? A reestreia cuida disso.</p>
    </article>
  </div>
</section>

<section className="section faq">
  <p className="kicker dn-reveal">Ficou com alguma dúvida?</p>
  <h2 className="dn-dn-reveal d1">Perguntas frequentes</h2>
  <div className="dn-faq-list">
    <details className="dn-dn-reveal"><summary>Preciso agendar ou posso chegar direto?</summary><p>Trabalhamos com hora marcada para garantir seu atendimento com calma. Agende pelo WhatsApp — é só chamar no link da bio.</p></details>
    <details className="dn-dn-reveal d1"><summary>O pacote de Black Friday vale em qualquer unidade?</summary><p>São 6 esmaltações master por R$ 550, em até 2x sem juros, com validade de 6 meses. Confirme a unidade no momento do agendamento.</p></details>
    <details className="dn-dn-reveal d2"><summary>Gel ou fibra de vidro: qual escolher?</summary><p>As duas técnicas dão um acabamento natural e resistente. Na avaliação, a equipe indica a melhor opção para a sua unha.</p></details>
    <details className="dn-dn-reveal d3"><summary>De quanto em quanto tempo faço manutenção?</summary><p>O ideal é a cada 20 a 21 dias. Mantendo o prazo, você aproveita os valores do Renova Nita com esmaltação em gel cortesia.</p></details>
  </div>
</section>

<footer className="footer">
  <img src={avatar} alt="Dona Nita" className="footer-logo" />
  <p className="footer-brand">DONA NITA ESMALTERIA</p>
  <p className="footer-line">Madalena · Boa Viagem · Espinheiro — Recife</p>
  <div className="footer-links">
    <a href="https://wa.me/message/KAWXL6243Q2IN1" target="_blank" rel="noopener">WhatsApp</a>
    <a href="https://www.instagram.com/donanita_esmalteria/" target="_blank" rel="noopener">Instagram</a>
  </div>
  <p className="footer-copy">© 2026 Dona Nita Esmalteria. Todos os direitos reservados.</p>
</footer>

<a className="wa-float" href="https://wa.me/message/KAWXL6243Q2IN1" target="_blank" rel="noopener" aria-label="Agendar pelo WhatsApp">
  <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor"><path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.8 5 2.3 7L4 29l7.3-2.3c1.9 1 3.9 1.5 4.7 1.5 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm0 21.5c-1.5 0-3.6-.6-5.3-1.6l-.4-.2-3.9 1.2 1.2-3.8-.3-.4c-1.3-1.8-2-4-2-5.8C5.3 9.5 10.1 5 16 5s10.7 4.5 10.7 9.9-4.8 9.6-10.7 9.6zm5.5-7c-.3-.2-1.8-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.1-.3.2-.6.1c-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1s0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5s0-.4 0-.5-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4z"/></svg>
</a>


    </div>;
}

