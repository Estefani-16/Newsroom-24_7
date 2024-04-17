list: var list = [{ date: '12/1/2011', reading: 3, id: 20055 }, { date: '13/1/2011', reading: 5, id: 20053 }, { date: '14/1/2011', reading: 6, id: 45652 }, { date: '13/1/2011', reading: 5, id: 20051 },];

// Input: customFilter(list, 'reading', '5')



function customFilter(list, keyName, value) {//your code herereturn outputList;

    var ans = [];

    list.forEach(element => {
        if (element[keyName] == value)
            ans.push(element)

    });
    return ans;

}

customFilter(list, 'reading', '5')