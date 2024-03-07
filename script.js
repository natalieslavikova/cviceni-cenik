const selectPlan = (planNumber) => {
    selectedPlan();                                                  // Odstraňuje třídu 'plan--selected' od všech prvků s třídou 'plan' díky funkci dole
    const subject = document.getElementById(`plan${planNumber}`);   //vybere prvek s třídou plan podle čísla, které zadáme
    subject.classList.add('plan--selected');                        // a přidá k němu třídu
}

const selectedPlan = () => {                                //tato funkce vybere všechny prvky s třídou plan a odebere z nich všechny třídy plan--selected
    const allPlans = document.querySelectorAll('.plan');    //funkce vybere všechny plan
    allPlans.forEach(plan => {                             // forEach projde všechny prvky ze VŠECH plan odstraní prvky
        plan.classList.remove('plan--selected');
    });
}

selectPlan(2);
selectPlan(1);
selectPlan(3);
