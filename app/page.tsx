"use client";

import {
  Users,
  CreditCard,
  Dumbbell,
  TrendingUp,
  CalendarDays,
  Plus,
  ChevronRight,
} from "lucide-react";

const stats = [
  {
    title: "Alunos ativos",
    value: "128",
    change: "+12 este mês",
    icon: Users,
  },
  {
    title: "Mensalidades em atraso",
    value: "7",
    change: "R$ 490,00 pendentes",
    icon: CreditCard,
  },
  {
    title: "Faturamento do mês",
    value: "R$ 8.420",
    change: "+8,4% este mês",
    icon: TrendingUp,
  },
  {
    title: "Fichas ativas",
    value: "96",
    change: "32 atualizações pendentes",
    icon: Dumbbell,
  },
];

export default function Home() {
  return (
    <main className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">A</div>
          <div>
            <strong>Academia</strong>
            <span>FÁCIL</span>
          </div>
        </div>

        <nav>
          <a className="active">Dashboard</a>
          <a>Alunos</a>
          <a>Mensalidades</a>
          <a>Treinos</a>
          <a>Exercícios</a>
          <a>Evolução</a>
          <a>Configurações</a>
        </nav>

        <div className="sidebar-bottom">
          <div className="user-avatar">AD</div>
          <div>
            <strong>Administrador</strong>
            <span>Academia Fácil</span>
          </div>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div>
            <p className="eyebrow">VISÃO GERAL</p>
            <h1>Dashboard</h1>
            <p className="subtitle">
              Acompanhe sua academia em um só lugar.
            </p>
          </div>

          <button className="primary-button">
            <Plus size={18} />
            Novo aluno
          </button>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div className="stat-card" key={stat.title}>
                <div className="stat-top">
                  <div className="stat-icon">
                    <Icon size={20} />
                  </div>
                </div>

                <p>{stat.title}</p>
                <h2>{stat.value}</h2>
                <span>{stat.change}</span>
              </div>
            );
          })}
        </section>

        <section className="main-grid">
          <div className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">FINANCEIRO</p>
                <h3>Próximos vencimentos</h3>
              </div>

              <button className="link-button">
                Ver todos <ChevronRight size={16} />
              </button>
            </div>

            <div className="payment-list">
              <div className="payment">
                <div className="person">
                  <div className="avatar">MS</div>
                  <div>
                    <strong>Marcos Silva</strong>
                    <span>Plano Premium</span>
                  </div>
                </div>
                <div className="payment-date">
                  <CalendarDays size={15} />
                  08/09/2026
                </div>
              </div>

              <div className="payment">
                <div className="person">
                  <div className="avatar">JS</div>
                  <div>
                    <strong>João Santos</strong>
                    <span>Plano Mensal</span>
                  </div>
                </div>
                <div className="payment-date">
                  <CalendarDays size={15} />
                  10/09/2026
                </div>
              </div>

              <div className="payment">
                <div className="person">
                  <div className="avatar">AC</div>
                  <div>
                    <strong>Ana Costa</strong>
                    <span>Plano Premium</span>
                  </div>
                </div>
                <div className="payment-date">
                  <CalendarDays size={15} />
                  12/09/2026
                </div>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">ACESSO RÁPIDO</p>
                <h3>Ações rápidas</h3>
              </div>
            </div>

            <div className="quick-actions">
              <button>
                <Users size={20} />
                <span>
                  <strong>Cadastrar aluno</strong>
                  <small>Adicionar novo aluno</small>
                </span>
                <ChevronRight size={18} />
              </button>

              <button>
                <CreditCard size={20} />
                <span>
                  <strong>Registrar pagamento</strong>
                  <small>Confirmar mensalidade</small>
                </span>
                <ChevronRight size={18} />
              </button>

              <button>
                <Dumbbell size={20} />
                <span>
                  <strong>Criar ficha</strong>
                  <small>Montar novo treino</small>
                </span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </section>

        <section className="panel recent-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">ALUNOS</p>
              <h3>Alunos recentes</h3>
            </div>

            <button className="link-button">
              Ver alunos <ChevronRight size={16} />
            </button>
          </div>

          <div className="recent-grid">
            <div className="recent-card">
              <div className="avatar">RL</div>
              <div>
                <strong>Rafael Lima</strong>
                <span>Plano Premium</span>
              </div>
            </div>

            <div className="recent-card">
              <div className="avatar">BC</div>
              <div>
                <strong>Beatriz Costa</strong>
                <span>Plano Mensal</span>
              </div>
            </div>

            <div className="recent-card">
              <div className="avatar">LM</div>
              <div>
                <strong>Lucas Martins</strong>
                <span>Plano Premium</span>
              </div>
            </div>

            <div className="recent-card">
              <div className="avatar">GS</div>
              <div>
                <strong>Gabriel Souza</strong>
                <span>Plano Mensal</span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
