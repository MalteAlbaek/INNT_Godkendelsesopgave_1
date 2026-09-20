import { StyleSheet } from 'react-native';

export const farver = {
  groen: '#2E7D32',
  moerkGroen: '#1B5E20',
  lysGroen: '#E8F5E9',
  baggrund: '#F4F7F2',
  hvid: '#FFFFFF',
  tekst: '#1F2A1F',
  graa: '#6B7A6B',
  roed: '#C62828',
  blaa: '#1565C0',
};

export const GlobalStyle = StyleSheet.create({
  // Generelt
  container: {
    flex: 1,
    backgroundColor: farver.baggrund,
  },
  indhold: {
    padding: 16,
  },
  centreret: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  overskrift: {
    fontSize: 22,
    fontWeight: '700',
    color: farver.tekst,
    marginBottom: 8,
  },
  tekst: {
    fontSize: 15,
    color: farver.tekst,
    lineHeight: 21,
  },
  tekstGraa: {
    fontSize: 14,
    color: farver.graa,
  },

  // Kort (kort/liste-element)
  kort: {
    backgroundColor: farver.hvid,
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  kortRaekke: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  kortTitel: {
    fontSize: 17,
    fontWeight: '700',
    color: farver.tekst,
    flexShrink: 1,
  },
  badge: {
    backgroundColor: farver.lysGroen,
    color: farver.moerkGroen,
    fontWeight: '700',
    fontSize: 13,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    overflow: 'hidden',
  },
  badgeRaekke: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },

  // Knapper
  knap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: farver.groen,
    paddingVertical: 13,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginTop: 12,
  },
  knapSekundaer: {
    backgroundColor: farver.hvid,
    borderWidth: 2,
    borderColor: farver.groen,
  },
  knapTekst: {
    color: farver.hvid,
    fontSize: 16,
    fontWeight: '700',
  },
  knapTekstSekundaer: {
    color: farver.groen,
  },
  knapSlet: {
    padding: 8,
  },

  // Detaljer
  detaljeRaekke: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CBD5C8',
  },
  detaljeLabel: {
    color: farver.graa,
    fontSize: 15,
  },
  detaljeVaerdi: {
    color: farver.tekst,
    fontSize: 15,
    fontWeight: '600',
    flexShrink: 1,
    textAlign: 'right',
    marginLeft: 16,
  },

  // Input
  input: {
    backgroundColor: farver.hvid,
    borderWidth: 1,
    borderColor: '#B7C4B4',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginTop: 8,
  },

  // Kortskærm
  kortView: {
    flex: 1,
  },

  // Scorekort
  statRaekke: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
  },
  statBoks: {
    flex: 1,
    backgroundColor: farver.hvid,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  statTal: {
    fontSize: 24,
    fontWeight: '800',
    color: farver.groen,
  },
  scoreTal: {
    fontSize: 26,
    fontWeight: '800',
    color: farver.tekst,
  },
  underPar: { color: farver.groen, fontWeight: '700' },
  overPar: { color: farver.roed, fontWeight: '700' },
  tomTekst: {
    textAlign: 'center',
    color: farver.graa,
    marginTop: 40,
    fontSize: 15,
  },
});
